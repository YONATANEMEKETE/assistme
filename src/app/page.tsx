import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="text-xl bg-mybglight font-bold h-screen grid place-content-center">
      <Button className="bg-mybglight text-xl text-myaccent font-headin font-bold">
        Hello world
      </Button>
    </div>
  );
}
