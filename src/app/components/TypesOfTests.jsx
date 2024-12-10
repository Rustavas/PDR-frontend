'use client';

import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link.js';

import { useEffect } from 'react';
import { selectTypesOfTests } from '../redux/tests/selectors.js';
import { apiTypesOfTests } from '../redux/tests/operations.js';

const TypesOfTests = () => {
  const dispatch = useDispatch();
  const types = useSelector(selectTypesOfTests);

  useEffect(() => {
    dispatch(apiTypesOfTests());
  }, [dispatch]);

  return (
    <div>
      <ul
        style={{
          display: 'flex',
          gap: '15px',
          listStyleType: 'none',
        }}
      >
        {Array.isArray(types) &&
          types.map((type, index) => {
            return (
              <li key={index} style={{}}>
                <Link href={`/tests/${type.href}`}>
                  <button>{type.title}</button>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TypesOfTests;
