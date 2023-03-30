import { getMonth } from '../script.js';

describe('getting the name of the month by number',()=>
    it('correct number',()=>{
        expect(getMonth(1)).toBe('январь');
        expect(getMonth(5)).toBe('май');
        expect(getMonth(12)).toBe('декабрь');
    }),
    it('invalid number',()=>{
        expect(getMonth(0)).toBe('некорретное значение');
        expect(getMonth(13)).toBe('некорретное значение');
    })
)