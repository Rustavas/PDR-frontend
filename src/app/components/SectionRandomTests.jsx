'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { apiSectionRandomTests } from '../redux/tests/operations.js';
import { selectSectionRandomTests } from '../redux/tests/selectors.js';

const SectionRandomTests = ({ sectionSlag }) => {
  const dispatch = useDispatch();
  const sectionTests = useSelector(selectSectionRandomTests);
  const contentArr = sectionTests?.content || [];
  // console.log(contentArr)
  useEffect(() => {
    dispatch(apiSectionRandomTests(sectionSlag));
  }, [dispatch, sectionSlag]);

  return (
    <div>
      {sectionTests !== null &&
        typeof sectionTests === 'object' &&
        !Array.isArray(sectionTests) && (
          <>
            <h2>{sectionTests.title}</h2>
            <ul
              style={{
                display: 'flex',
                listStyleType: 'none',
              }}
            >
              {contentArr.map((item, index) => {
                return (
                  <li key={index}>
                    <button
                      style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        margin: '5px',
                      }}
                    >
                      {index + 1}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div>
              {contentArr.length > 0 && (
                <>
                  <h3>{contentArr[0].question}</h3>
                  <ul>
                    {contentArr[0].answers.map((item, index) => {
                      return (
                        <li key={index}>
                          <button>{item.text}</button>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>
          </>
        )}
    </div>
  );
};

export default SectionRandomTests;
