import { Stack } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { New } from './New';
import { NewsRow } from './NewsRow';
import {
  addReadLater,
  removeReadLater,
  getNews,
  fetchRssNews
} from './newsSlice';
import './News.css';

export function NewsList() {
  const news = useAppSelector(getNews);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRssNews())
  }, [])

  useEffect(() => {
    console.log(news, 'news')
  }, [news])

  return (
    <Stack spacing={2}>
      {news.map((el: New) =>
        <NewsRow
          data={el}
          key={el.guid}
          className="news-link"
        />
      )
      }
    </Stack>
  );
}
