import { MigrationInterface, QueryRunner } from 'typeorm';
//---------------------------------------------------------------------------
import dataSource from '../../database/data-source';
//---------------------------------------------------------------------------
import { LccClass } from '../../database/entity/item/LccClass';
import { LccSubclass } from '../../database/entity/item/LccSubclass';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 *  Seed setup tables for data derived from the Library of Congress:
 *
 *    * LccClass
 *    * LccSubclass
 *
 */
export class Migration_0000000003 implements MigrationInterface {
  /**
   *  Migration: up
   */
  async up(queryRunner: QueryRunner): Promise<void> {
    /*
     *  Seed `LccClass`.
     */
    //  Insert with simple query
    await queryRunner.query(
      `INSERT INTO lcc_class (uid, descr) VALUES
  ("A", "General Works"),
  ("B", "Philosophy, Psychology, Religion"),
  ("C", "Auxiliary Sciences of History (General)"),
  ("D", "World History (except American History)"),
  ("E", "American History"),
  ("F", "Local History of the United States and British, Dutch, French, and Latin America"),
  ("G", "Geography, Anthropology, Recreation"),
  ("H", "Social Sciences"),
  ("J", "Political Science"),
  ("K", "Law"),
  ("L", "Education"),
  ("M", "Music"),
  ("N", "Fine Arts"),
  ("P", "Language and Literature"),
  ("Q", "Science and Mathematics"),
  ("R", "Medicine"),
  ("S", "Agriculture"),
  ("T", "Technology"),
  ("U", "Military Science"),
  ("V", "Naval Science"),
  ("Z", "Bibliography, Library Science")`
    );

    /*
     *  Seed `LccSubclass`.
     */
    const subclassSeeds = [
      [
        ['AC', 'Collections.  Series.  Collected works'],
        ['AE', 'Encyclopedias'],
        ['AG', 'Dictionaries and other general reference works'],
        ['AI', 'Indexes'],
        ['AM', 'Museums.  Collectors and collecting'],
        ['AN', 'Newspapers'],
        ['AP', 'Periodicals'],
        ['AS', 'Academies and learned societies'],
        ['AY', 'Yearbooks.  Almanacs.  Directories'],
        ['AZ', 'History of scholarship and learning.  The humanities'],
      ],
      [
        ['B', 'Philosophy (General)'],
        ['BC', 'Logic'],
        ['BD', 'Speculative philosophy'],
        ['BF', 'Psychology'],
        ['BH', 'Aesthetics'],
        ['BJ', 'Ethics'],
        ['BL', 'Religions.  Mythology.  Rationalism'],
        ['BM', 'Judaism'],
        ['BP', 'Islam.  Bahaism.  Theosophy, etc.'],
        ['BQ', 'Buddhism'],
        ['BR', 'Christianity'],
        ['BS', 'The Bible'],
        ['BT', 'Doctrinal theology'],
        ['BV', 'Practical Theology'],
        ['BX', 'Christian Denominations'],
      ],
      [
        ['CB', 'History of Civilization'],
        ['CC', 'Archaeology'],
        ['CD', 'Diplomatics.  Archives.  Seals'],
        ['CE', 'Technical Chronology.  Calendar'],
        ['CJ', 'Numismatics'],
        ['CN', 'Inscriptions.  Epigraphy'],
        ['CR', 'Heraldry'],
        ['CS', 'Genealogy'],
        ['CT', 'Biography'],
      ],
      [
        ['D', 'History (General)'],
        ['DA', 'Great Britain'],
        ['DAW', 'Central Europe'],
        ['DB', 'Austria---Liechtenstein---Hungary---Czechoslovakia'],
        ['DC', 'France---Andorra---Monaco'],
        ['DD', 'Germany'],
        ['DE', 'Greco-Roman World'],
        ['DF', 'Greece'],
        ['DG', 'Italy---Malta'],
        ['DH', 'Low Countries---Benelux Countries'],
        ['DJ', 'Netherlands (Holland)'],
        ['DJK', 'Eastern Europe (General)'],
        ['DK', 'Russia.  Soviet Union.  Former Soviet Republics---Poland'],
        ['DL', 'Northern Europe.  Scandinavia'],
        ['DP', 'Spain---Portugal'],
        ['DQ', 'Switzerland'],
        ['DR', 'Balkan Peninsula'],
        ['DS', 'Asia'],
        ['DT', 'Africa'],
        ['DU', 'Oceania (South Seas)'],
        ['DX', 'History of the Romani people'],
      ],
      [['E', 'American History']],
      [
        [
          'F',
          'Local History of the United States and British, Dutch, French, and Latin America',
        ],
      ],
      [
        ['G', 'Geography (General).  Atlases.  Maps'],
        ['GA', 'Mathematical geography.  Cartography'],
        ['GB', 'Physical geography'],
        ['GC', 'Oceanography'],
        ['GE', 'Environmental Sciences'],
        ['GF', 'Human ecology.  Anthropogeography'],
        ['GN', 'Anthropology'],
        ['GR', 'Folklore'],
        ['GT', 'Manners and customs (General)'],
        ['GV', 'Recreation.  Leisure'],
      ],
      [
        ['H', 'Social sciences (General)'],
        ['HA', 'Statistics'],
        ['HB', 'Economic theory.  Demography'],
        ['HC', 'Economic history and conditions'],
        ['HD', 'Industries.  Land use.  Labor'],
        ['HE', 'Transportation and communications'],
        ['HF', 'Commerce'],
        ['HG', 'Finance'],
        ['HJ', 'Public finance'],
        ['HM', 'Sociology (General)'],
        [
          'HN',
          'Social history and conditions.  Social problems.  Social reform',
        ],
        ['HQ', 'The family.  Marriage, Women and Sexuality'],
        ['HS', 'Societies: secret, benevolent, etc.'],
        ['HT', 'Communities.  Classes.  Races'],
        ['HV', 'Social pathology.  Social and public welfare.  Criminology'],
        ['HX', 'Socialism.  Communism.  Anarchism'],
      ],
      [
        ['J', 'General legislative and executive papers'],
        ['JA', 'Political science (General)'],
        ['JC', 'Political theory'],
        ['JF', 'Political institutions and public administration'],
        [
          'JJ',
          'Political institutions and public administration (North America)',
        ],
        [
          'JK',
          'Political institutions and public administration (United States)',
        ],
        [
          'JL',
          'Political institutions and public administration (Canada, Latin America, etc.)',
        ],
        ['JN', 'Political institutions and public administration (Europe)'],
        [
          'JQ',
          'Political institutions and public administration (Asia, Africa, Australia, Pacific Area, etc.)',
        ],
        ['JS', 'Local government.  Municipal government'],
        [
          'JV',
          'Colonies and colonization.  Emigration and immigration.  International migration',
        ],
        ['JX', 'International law, see JZ and KZ (obsolete)'],
        ['JZ', 'International relations'],
      ],
      [
        ['K', 'Law in general.  Comparative and uniform law.  Jurisprudence'],
        [
          'KB',
          'Religious law in general.  Comparative religious law.  Jurisprudence',
        ],
        ['KBM', 'Jewish law'],
        ['KBP', 'Islamic law'],
        ['KBR', 'History of canon law'],
        ['KBS', 'Canon law of Eastern churches'],
        [
          'KBT',
          'Canon law of Eastern Rite Churches in Communion with the Holy See of Rome',
        ],
        ['KBU', 'Law of the Roman Catholic Church.  The Holy See'],
        ['KD', 'United Kingdom and Ireland'],
        ['KDK', 'United Kingdom and Ireland'],
        ['KDZ', 'America.  North America'],
        ['KE', 'Canada'],
        ['KF', 'United States'],
        [
          'KG',
          'Latin America---Mexico and Central America---West Indies.  Caribbean area',
        ],
        ['KH', 'South America'],
        //  Subclasses KJ-KKZ: Europe
        ['KJ', 'Europe'],
        //  Subclasses KL-KWX: Asia and Eurasia, Africa, Pacific Area, and Antarctica
        ['KL', 'Asia and Eurasia, Africa, Pacific Area, and Antarctica'],
        ['KU', 'Law of Australia and New Zealand'],
        ['KUQ', 'Law of Australia and New Zealand'],
        ['KZ', 'Law of nations'],
      ],
      [
        ['L', 'Education (General)'],
        ['LA', 'History of education'],
        ['LB', 'Theory and practice of education'],
        ['LC', 'Special aspects of education'],
        ['LD', 'Individual institutions---United States'],
        ['LE', 'Individual institutions---America (except United States)'],
        ['LF', 'Individual institutions---Europe'],
        [
          'LG',
          'Individual institutions---Asia, Africa, Indian Ocean islands, Australia, New Zealand, Pacific islands',
        ],
        ['LH', 'College and school magazines and papers'],
        ['LJ', 'Student fraternities and societies, United States'],
        ['LT', 'Textbooks'],
      ],
      [
        ['M', 'Music'],
        ['ML', 'Literature on music'],
        ['MT', 'Instruction and study'],
      ],
      [
        ['N', 'Visual arts'],
        ['NA', 'Architecture'],
        ['NB', 'Sculpture'],
        ['NC', 'Drawing.  Design.  Illustration'],
        ['ND', 'Painting'],
        ['NE', 'Print media'],
        ['NK', 'Decorative arts'],
        ['NX', 'Arts in general'],
      ],
      [
        ['P', 'Philology.  Linguistics'],
        ['PA', 'Greek language and literature.  Latin language and literature'],
        ['PB', 'Modern languages.  Celtic languages and literature'],
        ['PC', 'Romanic languages'],
        ['PD', 'Germanic languages.  Scandinavian languages'],
        ['PE', 'English language'],
        ['PF', 'West Germanic languages'],
        [
          'PG',
          'Slavic languages and literatures.  Baltic languages.  Albanian language',
        ],
        ['PH', 'Uralic languages.  Basque language'],
        ['PJ', 'Oriental languages and literatures'],
        ['PK', 'Indo-Iranian languages and literatures'],
        ['PL', 'Languages and literatures of Eastern Asia, Africa, Oceania'],
        ['PM', 'Hyperborean, Native American, and artificial languages'],
        ['PN', 'Literature (General)'],
        [
          'PQ',
          'French literature---Italian literature---Spanish literature---Portuguese literature',
        ],
        ['PR', 'English literature'],
        ['PS', 'American literature'],
        [
          'PT',
          'German literature---Dutch literature---Flemish literature since 1830---Afrikaans literature---Scandinavian literature---Old Norse literature: Old Icelandic and Old Norwegian---Modern Icelandic literature---Faroese literature---Danish literature---Norwegian literature---Swedish literature',
        ],
        ['PZ', 'Fiction and juvenile belles lettres'],
      ],
      [
        ['Q', 'Science (General)'],
        ['QA', 'Mathematics'],
        ['QB', 'Astronomy'],
        ['QC', 'Physics'],
        ['QD', 'Chemistry'],
        ['QE', 'Geology'],
        ['QH', 'Natural history---Biology'],
        ['QK', 'Botany'],
        ['QL', 'Zoology'],
        ['QM', 'Human anatomy'],
        ['QP', 'Physiology'],
        ['QR', 'Microbiology'],
      ],
      [
        ['R', 'Medicine (General)'],
        ['RA', 'Public aspects of medicine'],
        ['RB', 'Pathology'],
        ['RC', 'Internal medicine'],
        ['RD', 'Surgery'],
        ['RE', 'Ophthalmology'],
        ['RF', 'Otorhinolaryngology'],
        ['RG', 'Gynecology and Obstetrics'],
        ['RJ', 'Pediatrics'],
        ['RK', 'Dentistry'],
        ['RL', 'Dermatology'],
        ['RM', 'Therapeutics.  Pharmacology'],
        ['RS', 'Pharmacy and materia medica'],
        ['RT', 'Nursing'],
        ['RV', 'Botanic, Thomsonian, and Eclectic medicine'],
        ['RX', 'Homeopathy'],
        ['RZ', 'Other systems of medicine'],
      ],
      [
        ['S', 'Agriculture (General)'],
        ['SB', 'Horticulture.  Plant propagation.  Plant breeding'],
        ['SD', 'Forestry.  Arboriculture.  Silviculture'],
        ['SF', 'Animal husbandry.  Animal science'],
        ['SH', 'Aquaculture.  Fisheries.  Angling'],
        ['SK', 'Hunting'],
      ],
      [
        ['T', 'Technology (General)'],
        ['TA', 'Engineering Civil engineering (General).'],
        ['TC', 'Hydraulic engineering.  Ocean engineering'],
        ['TD', 'Environmental technology.  Sanitary engineering'],
        ['TE', 'Highway engineering.  Roads and pavements'],
        ['TF', 'Railroad engineering and operation'],
        ['TG', 'Bridges'],
        ['TH', 'Building construction'],
        ['TJ', 'Mechanical engineering and machinery'],
        ['TK', 'Electrical engineering.  Electronics.  Nuclear engineering'],
        ['TL', 'Motor vehicles.  Aeronautics.  Astronautics'],
        ['TN', 'Mining engineering.  Metallurgy'],
        ['TP', 'Chemical technology'],
        ['TR', 'Photography'],
        ['TS', 'Manufacturing engineering.  Mass production'],
        ['TT', 'Handicrafts.  Arts and crafts'],
        ['TX', 'Home economics'],
      ],
      [
        ['U', 'Military science (General)'],
        ['UA', 'Armies: Organization, distribution, military situation'],
        ['UB', 'Military administration'],
        ['UC', 'Military maintenance and transportation'],
        ['UD', 'Infantry'],
        ['UE', 'Cavalry.  Armor'],
        ['UF', 'Artillery'],
        ['UG', 'Military engineering.  Air forces'],
        ['UH', 'Other military services'],
      ],
      [
        ['V', 'Naval science (General)'],
        ['VA', 'Navies: Organization, distribution, naval situation'],
        ['VB', 'Naval administration'],
        ['VC', 'Naval maintenance'],
        ['VD', 'Naval seamen'],
        ['VE', 'Marines'],
        ['VF', 'Naval ordnance'],
        ['VG', 'Minor services of navies'],
        ['VK', 'Navigation.  Merchant marine'],
        ['VM', 'Naval architecture.  Shipbuilding.  Marine engineering'],
      ],
      [
        [
          'Z',
          'Books (General).  Writing.  Paleography.  Book industries and trade.  Libraries.  Bibliography',
        ],
        ['ZA', 'Information resources/materials'],
      ],
    ];

    //  Repository
    const lccClassRep = dataSource.getRepository(LccClass);
    const lccSubclassRep = dataSource.getRepository(LccSubclass);

    //  Insert
    subclassSeeds.forEach(async (group, index) => {
      const lccClass = await lccClassRep.findOneBy({ id: index + 1 });

      group.forEach(async (subclassSeed) => {
        const lccSubclass = new LccSubclass();

        lccSubclass.name = subclassSeed[0];
        lccSubclass.description = subclassSeed[1];
        lccSubclass.lccClass = lccClass;

        await lccSubclassRep.insert(lccSubclass);
      });
    });

    /*  // Basic query version
    await queryRunner.query(
      'INSERT INTO `lcc_subclass` (uic, descr, lcc_class) VALUES ' +
        //  For each subclass group
        subclassSeeds.map((group, index) => {
          //  Create a parenthesized value expression for subclasses within
          return group.map((subclass) => {
            return ['("', subclass.concat(index + 1).join('", "'), '")'].join("");
          }).join(", ");
        }).join(", ");
    );
    */
  }

  /**
   *  Migration: down
   */
  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('TRUNCATE TABLE `lcc_subclass`');
    await queryRunner.query('TRUNCATE TABLE `lcc_class`');
  }
}
