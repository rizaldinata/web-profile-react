import AboutMe from '@/components/AboutMe';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import { GridPattern } from '@/components/ui/shadcn-io/grid-pattern';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main>
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
        ]}
        className={cn(
          "mask-[radial-gradient(1600px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-0%] h-[200%] skew-y-12"
        )}
      />
      <div>
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}