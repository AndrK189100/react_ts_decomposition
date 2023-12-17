/**
 * Компонент новость
 * @param {string} News.link ссылка на новость
 * @param {string} News.icon ссылка на иконку
 * @param {string} News.title Заголовок новости
 * @description показ новости
 */

type News = {
    link: string;
    icon: string;
    title: string;
}

export default function News({news}:{news: News[]}) {

}