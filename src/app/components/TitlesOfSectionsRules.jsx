'use client';

import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link.js';

import { selectTitlesOfSectionsRules } from '../redux/rules/selectors.js';
import { useEffect } from 'react';
import { apiTitlesOfSectionsRules } from '../redux/rules/operations.js';

const TitlesOfSectionsRules = () => {
  const dispatch = useDispatch();
  const sections = useSelector(selectTitlesOfSectionsRules);

  useEffect(() => {
    dispatch(apiTitlesOfSectionsRules());
  }, [dispatch]);

  return (
    <div>
      <Link href="/rules">Зміст</Link>
      <ul>
        {Array.isArray(sections) &&
          sections.map(section => {
            return (
              <li key={section.slag}>
                <Link href={`/rules/${section.slag}`}>
                  <button>{section.title}</button>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TitlesOfSectionsRules;
