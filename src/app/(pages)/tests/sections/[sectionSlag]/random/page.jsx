'use client';

import { useParams } from 'next/navigation';

import TypesOfTests from '../../../../../components/TypesOfTests.jsx';
import SectionRandomTests from '../../../../../components/SectionRandomTests.jsx';

export default function RandomPage() {
  const { sectionSlag } = useParams();

  return (
    <div>
      <TypesOfTests />
      <SectionRandomTests sectionSlag={sectionSlag} />
    </div>
  );
}
