export function getMonth(monthNum) {
	if (monthNum === 1) return 'январь';
	if (monthNum === 2) return 'февраль';
	if (monthNum === 3) return 'март';
	if (monthNum === 4) return 'апрель';
	if (monthNum === 5) return 'май';
	if (monthNum === 6) return 'июнь';
	if (monthNum === 7) return 'июль';
	if (monthNum === 8) return 'август';
	if (monthNum === 9) return 'сентябрь';
	if (monthNum === 10) return 'октябрь';
	if (monthNum === 11) return 'ноябрь';
	if (monthNum === 12) return 'декабрь';
    return 'некорретное значение';
}