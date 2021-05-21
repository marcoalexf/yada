import axios from "axios";
import { NewsList } from "./NewsList";
import { New } from './New';
import Parser from 'rss-parser';

// A mock function to mimic making an async request for data
export const fetchNews = async () => {
    const parser = new Parser();
    return parser.parseURL('https://thingproxy.freeboard.io/fetch/https://hnrss.org/newest');
}
