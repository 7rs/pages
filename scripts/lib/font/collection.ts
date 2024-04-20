import { FontWeights, FontTypefaces, FontStyle, VariableFontStyle, Width, DefaultWidth } from './config';

/**
 * Eliminate duplicate weights and typefaces and create Sets.
 */
export class FontStyleCollection {
  private typefaces = new Set<FontTypefaces>();
  private weights = new Set<FontWeights | number>();
  private widths = new Set<string>();
  private variable: boolean = false;

  constructor(fontStyles: FontStyle[] | VariableFontStyle) {
    // fontStyles is `FontStyle[]`.
    if (Array.isArray(fontStyles)) {
      fontStyles.forEach((fontStyle) => {
        this.typefaces.add(fontStyle.typefaces || FontTypefaces.Normal);
        this.weights.add(fontStyle.weight || FontWeights.Regular);

        if (typeof fontStyle.width === 'number' || fontStyle.width == null) {
          this.widths.add(String(fontStyle.width || DefaultWidth));
        } else {
          this.widths.add(`${fontStyle.width[0]}..${fontStyle.width[1]}`);
        }
      });
      return;
    }

    // fontStyles is `VariableFontStyle`.
    this.variable = true;
    if (fontStyles.typefaces != null) {
      this.typefaces.add(fontStyles.typefaces);

      return;
    }

    // Multiple typefaces (Default).
    this.typefaces = new Set([FontTypefaces.Normal, FontTypefaces.Italic]);
  }

  public hasMultipletWeights(): boolean {
    return this.weights.size > 1;
  }

  /**
   * This method checks if the weight is the default value.
   *
   * @returns {boolean} Returns `true` if the weight is the default value, `false` otherwise.
   */
  public hasOnlyDefaultWeight(): boolean {
    if (this.variable) {
      return false;
    }
    return !this.hasMultipletWeights() && this.weights.has(FontWeights.Regular);
  }

  /**
   * This method checks whether has multiple typefaces.
   *
   * @returns {boolean} Returns `true` if has multiple typefaces, `false` otherwise.
   */
  public hasMultipleTypefaces() {
    return this.typefaces.size > 1;
  }

  /**
   * This method checks whether has single typeface and it's the default value.
   * `hasMultipleTypefaces` is called internally.
   *
   * @returns {boolean} Returns `true` if has only default typeface, `false` otherwise.
   */
  public hasOnlyDefaultTypeface(): boolean {
    return !this.hasMultipleTypefaces() && this.typefaces.has(FontTypefaces.Normal);
  }

  public hasOnlyDefaultWidth(): boolean {
    return this.widths.size === 1 && this.widths.has(String(DefaultWidth));
  }
}
