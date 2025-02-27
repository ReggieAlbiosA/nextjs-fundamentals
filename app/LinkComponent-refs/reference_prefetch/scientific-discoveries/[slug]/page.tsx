import { PostList } from './post-list';

const scientificDiscoveries: Record<string, { header: string; links: { id: number; title: string; parentSlug: string; childSlug: string }[]; }> = {
  "physics-space": {
    header: "Physics & Space",
    links: [
      { id: 1, title: "Law of Gravity – Isaac Newton (1687)", parentSlug: "physics-space", childSlug: "law-of-gravity" },
      { id: 2, title: "Theory of Relativity – Albert Einstein (1905)", parentSlug: "physics-space", childSlug: "theory-of-relativity" },
      { id: 3, title: "Quantum Mechanics – Niels Bohr (1922)", parentSlug: "physics-space", childSlug: "quantum-mechanics" },
      { id: 4, title: "Higgs Boson – Peter Higgs (1964)", parentSlug: "physics-space", childSlug: "higgs-boson" },
      { id: 5, title: "Dark Matter – Fritz Zwicky (1933)", parentSlug: "physics-space", childSlug: "dark-matter" },
      { id: 6, title: "Expansion of the Universe – Edwin Hubble (1929)", parentSlug: "physics-space", childSlug: "expansion-of-the-universe" },
      { id: 7, title: "Gravitational Waves – LIGO Team (2015)", parentSlug: "physics-space", childSlug: "gravitational-waves" },
    ],
  },
  "biology-medicine": {
    header: "Biology & Medicine",
    links: [
      { id: 1, title: "Discovery of DNA – James Watson & Francis Crick (1953)", parentSlug: "biology-medicine", childSlug: "discovery-of-dna" },
      { id: 2, title: "Theory of Evolution – Charles Darwin (1859)", parentSlug: "biology-medicine", childSlug: "theory-of-evolution" },
      { id: 3, title: "Germ Theory – Louis Pasteur (1861)", parentSlug: "biology-medicine", childSlug: "germ-theory" },
      { id: 4, title: "DNA Structure – Rosalind Franklin (1952)", parentSlug: "biology-medicine", childSlug: "dna-structure" },
      { id: 5, title: "CRISPR Gene Editing – Jennifer Doudna & Emmanuelle Charpentier (2012)", parentSlug: "biology-medicine", childSlug: "crispr-gene-editing" },
    ],
  },
  "chemistry": {
    header: "Chemistry",
    links: [
      { id: 1, title: "Discovery of Oxygen – Joseph Priestley (1774)", parentSlug: "chemistry", childSlug: "discovery-of-oxygen" },
      { id: 2, title: "Discovery of Nitrogen – Daniel Rutherford (1772)", parentSlug: "chemistry", childSlug: "discovery-of-nitrogen" },
      { id: 3, title: "Periodic Table – Dmitri Mendeleev (1869)", parentSlug: "chemistry", childSlug: "periodic-table" },
      { id: 4, title: "Discovery of Hydrogen – Henry Cavendish (1766)", parentSlug: "chemistry", childSlug: "discovery-of-hydrogen" },
      { id: 5, title: "Radioactivity – Marie Curie (1898)", parentSlug: "chemistry", childSlug: "radioactivity" },
    ],
  },
  "earth-environmental-science": {
    header: "Earth & Environmental Science",
    links: [
      { id: 1, title: "Plate Tectonics – Alfred Wegener (1912)", parentSlug: "earth-environmental-science", childSlug: "plate-tectonics" },
      { id: 2, title: "Continental Drift – Alfred Wegener (1912)", parentSlug: "earth-environmental-science", childSlug: "continental-drift" },
      { id: 3, title: "Global Climate Change – Svante Arrhenius (1896)", parentSlug: "earth-environmental-science", childSlug: "global-climate-change" },
      { id: 4, title: "Fossil Record – Charles Darwin (1859)", parentSlug: "earth-environmental-science", childSlug: "fossil-record" },
    ],
  },
  "technology-computing": {
    header: "Technology & Computing",
    links: [
      { id: 1, title: "Transistor – John Bardeen, Walter Brattain, William Shockley (1947)", parentSlug: "technology-computing", childSlug: "transistor" },
      { id: 2, title: "Microcomputer – Ed Roberts (1975)", parentSlug: "technology-computing", childSlug: "microcomputer" },
      { id: 3, title: "Personal Computer – Steve Jobs & Steve Wozniak (1976)", parentSlug: "technology-computing", childSlug: "personal-computer" },
      { id: 4, title: "Internet – Tim Berners-Lee (1990)", parentSlug: "technology-computing", childSlug: "internet" },
      { id: 5, title: "Smartphones – IBM Simon (1992)", parentSlug: "technology-computing", childSlug: "smartphones" },
      { id: 6, title: "Smartwatches – Pebble (2012)", parentSlug: "technology-computing", childSlug: "smartwatches" },
    ],
  },
};

// ✅ Generate static paths
export async function generateStaticParams() {
  return Object.keys(scientificDiscoveries).map((slug) => ({ slug }));
}

// ✅ Update Page Component
export default function Page({ params }: { params: { slug: string } }) {
  const pageData = scientificDiscoveries[params.slug];

  if (!pageData) {
    return <p>Page not found</p>;
  }

  return (
    <section className='w-full max-w-[850px] mx-auto pt-[50px] flex flex-col gap-y-[40px]'>  
      <div>
        <h1 className='font-bold text-[2rem]'>{pageData.header}</h1>
        <hr className='border-b-[2px] border-[#222126]'/>
      </div>

      <div>
        <PostList posts={pageData.links}></PostList>
      </div>
    </section>
  );
}
