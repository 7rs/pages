import { getFont } from "./index.ts"

{
  const fontName = "Fira+Sans"

  {
    const collectResult = fontName
  
    test("getFont: Required 400", () => {
      const result = getFont(fontName, [
        {weight: 400, typefaces: 0}
      ]);
    
      expect(result).toBe(collectResult);
    });
    
    test("[abbr] getFont: Required 400", () => {
      const result = getFont(fontName);
    
      expect(result).toBe(collectResult);
    });
  }
  
  {
    const collectResult = `${fontName}:wght@400;700`
  
    test("getFont: Required 400 & 700", () => {
      const result = getFont(fontName, [
        {weight: 400, typefaces: 0},
        {weight: 700, typefaces: 0}
      ]);
      expect(result).toBe(collectResult);
    });
    
    test("[abbr] getFont: Required 400 & 700", () => {
      const result = getFont(fontName, [
        {}, 
        {weight: 700}
      ]);
    
      expect(result).toBe(collectResult);
    });
  }
  
  {
    const collectResult = `${fontName}:ital@0;1`
  
    test("getFont: Required 400 (Normal & Italic)", () => {
      const result = getFont(fontName, [
        {weight: 400, typefaces: 0},
        {weight: 400, typefaces: 1}
      ]);
      expect(result).toBe(collectResult);
    });
    
    test("[abbr] getFont: Required 400 (Normal & Italic)", () => {
      const abbrResult = getFont(fontName, [
        {}, 
        {typefaces: 1}
      ]);
      expect(abbrResult).toBe(collectResult);
    });
  }
  
  {
    const collectResult = `${fontName}:ital,wght@0,400;0,700;1,400;1,700`
  
    test("getFont: Required 400 (Normal & Italic) & 700 (Normal & Italic)", () => {
      const result = getFont(fontName, [
        { weight: 400, typefaces: 0 },
        { weight: 700, typefaces: 0 },
        { weight: 400, typefaces: 1 },
        { weight: 700, typefaces: 1 }
      ]);
      expect(result).toBe(collectResult);
    });
  
    test("[abbr] getFont: Required 400 (Normal & Italic) & 700 (Normal & Italic)", () => {
      const result = getFont(fontName, [
        {},
        {weight: 700},
        {typefaces: 1},
        {weight: 700, typefaces: 1}
      ]);
      expect(result).toBe(collectResult);
    });
  }
}

{
  const fontName = "Open+Sans"

  {
    test("getFont: Required 300 - 700 (Normal & Italic) with variable width", () => {
      
      const result = getFont(fontName, {
        weight: [300, 800],
        width: [75, 100]
      })

      expect(result).toBe(`${fontName}:ital,wdth,wght@0,75..100,300..800;1,75..100,300..800`);
    })
  }
}
