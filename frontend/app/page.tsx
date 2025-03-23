import HomeClient from '@/components/home-client';
import JsonLd from '@/components/jsonld';
import { 
  generateWebsiteSchema, 
  generateOrganizationSchema,
  generateCourseSchema
} from '@/lib/jsonld';

export default function Home() {
  // Schémas JSON-LD pour le SEO
  const websiteSchema = generateWebsiteSchema(
    'How To Blockchain by Stamina',
    'https://staminadev.com/howtoblockchain',
    'Découvrez la blockchain et le Web3 de manière pratique et sécurisée. Créez votre wallet, obtenez vos premières cryptos et NFTs gratuitement sur un réseau de test.'
  );

  const organizationSchema = generateOrganizationSchema(
    'Stamina',
    'https://staminadev.com',
    'https://staminadev.com/logo.png',
    ['https://twitter.com/La_Kaarm']
  );

  const courseSchema = generateCourseSchema(
    'Apprendre la Blockchain',
    'Guide complet pour découvrir et maîtriser les bases de la blockchain et du Web3',
    'Stamina',
    'https://staminadev.com'
  );

  return (
    <>
      <JsonLd schema={[websiteSchema, organizationSchema, courseSchema]} />
      <HomeClient />
    </>
  );
}