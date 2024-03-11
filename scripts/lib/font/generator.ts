import { FontWeights, FontTypefaces, FontStyle, VariableFontStyle, FontStyleOptions } from './config';
import { FontStyleCollection } from './collection';

/**
 * This class generates style parameters for [Google Fonts](https://fonts.google.com/).
 *
 * @param {string} name
 * @param {FontStyle[] | VariableFontStyle} fontStyles
 */
export class GoogleFontURLGenerator {
  private name: string;
  private fontStyles: FontStyle[] | VariableFontStyle;
  private collection: FontStyleCollection;

  constructor(name: string, fontStyles: FontStyle[] | VariableFontStyle) {
    this.name = name;
    this.fontStyles = fontStyles;
    this.collection = new FontStyleCollection(this.fontStyles);
  }

  private hasWidth(width?: [number, number] | number): boolean {
    return width != null && width !== 100;
  }

  private getPrefix(): string | undefined {
    let options: string[] = [];

    if (!this.collection.hasOnlyDefaultTypeface()) {
      options.push(FontStyleOptions.Typeface);
    }

    if (!this.collection.hasOnlyDefaultWidth()) {
      options.push(FontStyleOptions.Width);
    }

    if (this.collection.hasMultipletWeights() || !this.collection.hasOnlyDefaultWeight()) {
      options.push(FontStyleOptions.Weight);
    }

    if (options.length <= 0) {
      return;
    }

    return options.join(',');
  }

  /**
   * This method returns the width config if `width` isn't undefined.
   * Variable width or custom static width only applies if `width` isn't undefined.
   *
   * @param {[number, number] | number | undefined} width
   * @returns {string}
   */
  private getFontWidth(width: [number, number] | number | undefined, requireColon: boolean): string {
    if (width == null) {
      return '';
    }

    if (typeof width === 'number') {
      return width === 100 ? '' : `${width},`;
    }

    return `${width[0]}..${width[1]},`;
  }

  /**
   * Returns width config.
   * `requireCustomTypeface` must be `true` if has multiple typefaces.
   *
   * @param font
   * @param requireCustomTypeface If has multiple typefaces must set `true`, `false` otherwise.
   * @returns {string}
   */
  private getFontStyle(font: FontStyle, requireCustomTypeface: boolean): string {
    const weight = font.weight || FontWeights.Regular;
    const width = this.getFontWidth(font.width, true);

    if (requireCustomTypeface) {
      return `${width}${font.typefaces || FontTypefaces.Normal},${weight}`;
    }

    return `${width}${weight}`;
  }

  /**
   * This method is called if weight is undefined or the default value.
   *
   * @returns {string}
   */
  private getWeightLessFont(fontStyle: FontStyle): string {
    const width = this.getFontWidth(fontStyle.width, true);
    const prefix = this.getPrefix();

    // Normal
    if (this.collection.hasOnlyDefaultTypeface()) {
      return this.name + (prefix ? `:${prefix}` : '');
    }

    // Italic
    if (!this.collection.hasMultipleTypefaces()) {
      return `${this.name}:${prefix}@${width}${FontTypefaces.Italic}`;
    }

    // Both
    return `${this.name}:${prefix}@${width}${FontTypefaces.Normal};${width}${FontTypefaces.Italic}`;
  }

  /**
   * This method is called if font isn't the variable font or weight isn't variable.
   * This method calls `getWeightLessFont` if weight is undefined or the default value.
   * Returns default query if `fontStyles` is empty.
   *
   * @param {FontStyle[]} fontStyles Example: `[{weight: 700}]`, `{weight: 700}`
   * @returns {string}
   */
  private getStaticFont(fontStyles: FontStyle[]): string {
    if (fontStyles.length <= 0) {
      return this.name;
    }

    if (this.collection.hasOnlyDefaultWeight()) {
      return this.getWeightLessFont(fontStyles[0]);
    }

    const styles: string[] = fontStyles.map((fontStyle) =>
      this.getFontStyle(fontStyle, !this.collection.hasOnlyDefaultTypeface()),
    );

    return `${this.name}:${this.getPrefix() || ''}@${[...new Set(styles)].join(';')}`;
  }

  /**
   * This method is called if font is the variable font or weight is variable.
   *
   * @param {VariableFontStyle} fontStyle Example: `{weight: [400, 700]}`
   * @returns {string}
   */
  private getVariableFont(fontStyle: VariableFontStyle): string {
    const weight = `${fontStyle.weight[0]}..${fontStyle.weight[1]}`;
    const width = this.getFontWidth(fontStyle.width, true);
    const prefix = this.getPrefix();

    // Normal
    if (this.collection.hasOnlyDefaultTypeface()) {
      return `${this.name}:${prefix}@${width}${weight}`;
    }

    // Italic
    if (fontStyle.typefaces === FontTypefaces.Italic) {
      return `${this.name}:${prefix}@${FontTypefaces.Italic},${width}${weight}`;
    }

    // Both
    return `${this.name}:${prefix}@`
      + `${FontTypefaces.Normal},${width}${weight};${FontTypefaces.Italic},${width}${weight}`;
  }

  /**
   * Returns font style config.
   *
   * @returns {string}
   */
  public getFont(): string {
    if (Array.isArray(this.fontStyles)) {
      return this.getStaticFont(this.fontStyles);
    }

    return this.getVariableFont(this.fontStyles);
  }
}
