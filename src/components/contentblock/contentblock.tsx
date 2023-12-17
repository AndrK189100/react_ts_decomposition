/**
 * Компонент отображения контентного блока
 * @param {string} title заголовок блока
 * @param {ContentBlock[]} elements массив с элементами блока
 * @description Вывод блоков Эфир, Посещаемое... Для кастомизации я бы передавал еще стили) 
 */

type ContentBlock = {
    title?: string;
    link: string;
    textlink: string;
    icon?: string;
}

export default function ContentBlock({title, content}:{title: string, content: ContentBlock[]}) {

}

