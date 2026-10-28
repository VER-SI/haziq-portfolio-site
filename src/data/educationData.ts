export type EducationItem = {
    id: string;
    degree: string;
    institution: string;
    levelTag: string;
    period: string;
    grade?: string;
    summary: string;
    subjects: string[];
    activities: string[];
};

export const educationList: EducationItem[] = [
    {
        id: 'utb',
        degree: 'Bachelor of Science (Hons) in Computing (Major in Software Development)',
        institution: 'Universiti Teknologi Brunei (UTB)',
        levelTag: 'Undergraduate Studies',
        period: 'Jul 2023 – Aug 2026',
        grade: 'Second Class Honours',
        summary: 'Focused on core software engineering principles, full-stack application development, database architecture, and system engineering.',
        subjects: [
            'Software Engineering Architecture',
            'Web Application Development (Laravel, React)',
            'Database Management Systems (MySQL)',
            'Data Structures & Algorithms',
            'Object-Oriented Programming',
        ],
        activities: [
            'Executive Member / Representative, Majlis Perwakilan Pelajar (MPP), UTB (2025 – 2026)',
            'Participant, UTB Sports Fiesta — Futsal & Esports (MLBB) (2023, 2026)',
            'Participant, UTB Sports Fiesta — Tug of War (2023)',
        ],
    },
    {
        id: 'a-level',
        degree: 'GCE A-Level (Physics / Science Stream)',
        institution: 'Pusat Tingkatan Enam Meragang',
        levelTag: 'Pre-University Education',
        period: 'Feb 2021 – Dec 2022',
        grade: '3 A-Levels (Mathematics, Chemistry, Physics, General Paper)',
        summary: 'Completed advanced pre-university studies focusing on analytical reasoning, physical sciences, and mathematics.',
        subjects: [
            'Mathematics',
            'Physics',
            'Chemistry',
            'General Paper',
        ],
        activities: [
            'Head of Welfare, Penolong Rejimen Rintis 8',
            'Member of Ping Pong Club',
            'Aku Anak Brunei Club',
        ],
    },
    {
        id: 'o-level',
        degree: 'GCE O-Level (All Science Subject Class)',
        institution: 'Sekolah Menengah Pehin Dato Seri Maharaja',
        levelTag: 'Secondary Education',
        period: '2016 – 2020',
        grade: '8 O-Levels',
        summary: 'Achieved strong academic results across all core science subjects, mathematics, and humanities.',
        subjects: [
            'Additional Mathematics',
            'Mathematics D',
            'Physics',
            'Chemistry',
            'Biology',
            'English Language',
            'Malay Language',
        ],
        activities: [
            'Dodgeball Club Member (2016 – 2019)',
            'Coin & Stamp Collection Club Member (2020)',
        ],
    },
    {
        id: 'ssru',
        degree: 'Sijil Sekolah-Sekolah Rendah Ugama (SSRU)',
        institution: 'Religious School (Tentera Laut Diraja Brunei)',
        levelTag: 'Religious Primary Education',
        period: '2016 – 2017',
        grade: 'Pangkat 1 (Aggregate 10)',
        summary: 'Completed fundamental religious primary education emphasizing Islamic jurisprudence, Quranic recitation, and Arabic literacy.',
        subjects: [
            'Al-Quran & Tajwid',
            'Tauhid & Fiqh',
            'Sejarah Islam (Islamic History)',
            'Bahasa Arab',
            'Tulisan Jawi',
        ],
        activities: [
            'Religious School Co-curricular Activities',
            'Islamic Studies & Quranic Competitions',
        ],
    },
];