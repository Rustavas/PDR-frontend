'use client';

import { useParams } from 'next/navigation';
import SectionDefaultTests from '../../../../components/SectionDefaulfTests.jsx';
import TypesOfTests from '../../../../components/TypesOfTests.jsx';

export default function SectionPage() {
  const { sectionSlag } = useParams();

  return (
    <div>
      <TypesOfTests />
      <SectionDefaultTests sectionSlag={sectionSlag} />
    </div>
  );
}
