'use client';

import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link.js';

import { useEffect } from 'react';
import { selectTitlesOfSectionsTests } from '../redux/tests/selectors.js';
import { apiTitlesOfSectionsTests } from '../redux/tests/operations.js';

const TitlesOfSectionsTests = () => {
  const dispatch = useDispatch();
  const titles = useSelector(selectTitlesOfSectionsTests);

  useEffect(() => {
    dispatch(apiTitlesOfSectionsTests());
  }, [dispatch]);
  // console.log(titles)
  return (
    <div>
      <ul>
        {Array.isArray(titles) &&
          titles.map(title => {
            return (
              <li
                key={title.slag}
                style={{
                  display: 'flex',
                  gap: '20px',
                }}
              >
                <h3>{title.title}</h3>
                <Link href={`/tests/sections/${title.slag}`}>
                  Послідовний порядок питань
                </Link>
                <Link href={`/tests/sections/${title.slag}/random`}>
                  Випадковий порядок питань
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TitlesOfSectionsTests;
