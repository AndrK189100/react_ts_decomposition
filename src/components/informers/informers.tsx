/**
 * Компонент информеры
 * @param {string} Informes.link ссылка на информекр
 * @param {string} Informes.content содержимое информера
 * @description отображение информеров - курсы, котировки и т. д.
 */

type Informers = {
    link: string;
    content: string;
}

export default function Informes({informers}:{informers: Informers[]}) {

}