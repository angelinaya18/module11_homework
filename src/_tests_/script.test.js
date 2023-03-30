import { getMonth } from '../script.js';

describe('getting the name of the month by number',()=>
    //тест на корретные значения месяца (>1 и <12)
    it('correct number',()=>{
        expect(getMonth(1)).toBe('январь');
        expect(getMonth(5)).toBe('май');
        expect(getMonth(12)).toBe('декабрь');
    }),
    //тест на некорретные значения месяца (<1 или >12)
    it('invalid number',()=>{
        expect(getMonth(0)).toBe('некорретное значение');
        expect(getMonth(13)).toBe('некорретное значение');
    })
)