import { JsonLdSchema } from '@/lib/jsonld';

interface JsonLdProps {
  schema: JsonLdSchema | JsonLdSchema[];
}

export default function JsonLd({ schema }: JsonLdProps) {
  // Convertit en tableau si ce n'est pas déjà le cas
  const schemas = Array.isArray(schema) ? schema : [schema];
  
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
} 