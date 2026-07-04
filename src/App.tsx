import { NotificationBoard } from './components/shared/notification-board';
import { Footer } from './components/navigation/footer';
import { SpiderWeb } from './components/spider-web';

import { Database, FileCode, Folder, GitBranch, Layers, Rocket, Shield, Zap } from 'lucide-react';

interface Notification {
  text: string;
  type?: 'info' | 'warning' | 'error';
}

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface FileTreeItem {
  name: string;
  type: 'folder' | 'file';
  indent: number;
}

interface TechImage {
  src: string;
  alt: string;
  title: string;
}
interface Resources {
  name: string;
  url: string;
  img?: string;
}

const features: Feature[] = [
  {
    icon: Shield,
    title: 'Authentication',
    description: 'Pre-configured Better Auth with secure session management.',
  },
  {
    icon: Database,
    title: 'Database',
    description: 'Prisma ORM ready with type-safe database operations.',
  },
  {
    icon: Layers,
    title: 'Data Fetching',
    description: 'TanStack Query for powerful server-state management.',
  },
  {
    icon: FileCode,
    title: 'Validation',
    description: 'Zod schema validation for type-safe data handling.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'React Compiler enabled for optimal rendering.',
  },
  {
    icon: Rocket,
    title: 'Developer Experience',
    description: 'Prettier, ESLint, and shadcn/ui components included.',
  },
];

const resources:Resources[] = [
  {
    name:'Next.js',
    url:'https://nextjs.org/docs',
    img: '/nextjs-light.svg'
  },
  {
    name:'Better Auth',
    url:'https://better-auth.com/docs',
    img: '/better-auth-light.svg'
  },
  {
    name:'Prisma',
    url:'https://www.prisma.io/docs/',
    img: '/prisma-light.svg'
  },
  {
    name:'TanStack Query',
    url:'https://tanstack.com/query/latest',
    img: '/tanstack-query-light.svg'
  },
  {
    name:'Zod',
    url:'https://zod.dev/',
    img: '/zod-light.svg'
  },
  {
    name:'shadcn/ui',
    url:'https://ui.shadcn.com/docs',
    img: '/shadcn-ui-light.svg'
  },
  {
    name:'Neon',
    url:'https://neon.tech/docs',
    img: '/neon-light.svg'
  },
  {
    name:'React Hook Form',
    url:'https://react-hook-form.com/docs',
    img: '/react-hook-form-light.svg'
  }
]



const fileTree: FileTreeItem[] = [
  { name: 'src/', type: 'folder', indent: 0 },
  { name: 'app/', type: 'folder', indent: 1 },
  { name: '(auth)/', type: 'folder', indent: 2 },
  { name: 'sign-in/page.tsx', type: 'file', indent: 3 },
  { name: 'sign-up/page.tsx', type: 'file', indent: 3 },
  { name: 'reset-password/page.tsx', type: 'file', indent: 3 },
  { name: 'verify-email/page.tsx', type: 'file', indent: 3 },
  { name: 'layout.tsx', type: 'file', indent: 3 },
  { name: 'api/', type: 'folder', indent: 2 },
  { name: 'auth/[...all]/route.ts', type: 'file', indent: 3 },
  { name: 'profile/', type: 'folder', indent: 2 },
  { name: 'page.tsx', type: 'file', indent: 3 },
  { name: 'layout.tsx', type: 'file', indent: 2 },
  { name: 'page.tsx', type: 'file', indent: 2 },
  { name: 'globals.css', type: 'file', indent: 2 },
  { name: 'components/', type: 'folder', indent: 1 },
  { name: 'auth/...', type: 'file', indent: 2 },
  { name: 'navigation/...', type: 'file', indent: 2 },
  { name: 'shared/...', type: 'file', indent: 2 },
  { name: 'user/...', type: 'file', indent: 2 },
  { name: 'ui/...', type: 'file', indent: 2 },
  { name: 'lib/', type: 'folder', indent: 1 },
  { name: 'auth.ts', type: 'file', indent: 2 },
  { name: 'auth-client.ts', type: 'file', indent: 2 },
  { name: 'constants.ts', type: 'file', indent: 2 },
  { name: 'prisma.ts', type: 'file', indent: 2 },
  { name: 'require-user-session.ts', type: 'file', indent: 2 },
  { name: 'send-email.ts', type: 'file', indent: 2 },
  { name: 'utils.ts', type: 'file', indent: 2 },
  { name: 'validations.ts', type: 'file', indent: 2 },
  { name: 'helpers/', type: 'folder', indent: 1 },
  { name: 'generate-user-avatar.ts', type: 'file', indent: 2 },
  { name: 'get-pwd-strength.ts', type: 'file', indent: 2 },
  { name: 'types/', type: 'folder', indent: 1 },
  { name: 'index.ts', type: 'file', indent: 2 },
  { name: 'prisma.ts', type: 'file', indent: 1 },
  { name: 'providers.tsx', type: 'file', indent: 1 },
  { name: 'proxy.ts', type: 'file', indent: 1 },
  { name: 'prisma/', type: 'folder', indent: 0 },
  { name: 'schema.prisma', type: 'file', indent: 1 },
  { name: 'public/', type: 'folder', indent: 0 },
  { name: '...', type: 'file', indent: 1 },
  { name: '.prettierrc', type: 'file', indent: 0 },
  { name: '.env.example', type: 'file', indent: 0 },
  { name: '.vscode/', type: 'folder', indent: 0 },
  { name: 'settings.json', type: 'file', indent: 1 },
];

const techImages: TechImage[] = [
  { src: '/nextjs-light.svg', alt: 'Next.js', title: 'Next.js' },
  { src: '/neon-light.svg', alt: 'Neon', title: 'Neon' },
  { src: '/shadcn-ui-light.svg', alt: 'shadcn/ui', title: 'shadcn/ui' },
  { src: '/react-hook-form-light.svg', alt: 'React Hook Form', title: 'React Hook Form' },
  { src: '/prisma-light.svg', alt: 'Prisma', title: 'Prisma' },
  { src: '/zod-light.svg', alt: 'Zod', title: 'Zod' },
  { src: '/better-auth-light.svg', alt: 'Better Auth', title: 'Better Auth' },
  { src: '/tanstack-query-light.svg', alt: 'TanStack Query', title: 'TanStack Query' },
];


const notifications: Notification[] = [
  { text: 'Note that experimental Nextjs `AuthInterups` feature is enabled for handling unauthorized redirections' },
  { text: '`.env.example` is a good place to start' },
  { text: 'To use Github or any social authentication, set up the corresponding environment variables and enable the providers in the `auth.ts`' },
  { text: 'Modify `schema.prisma` file and run `db:push`' },
];

function renderInlineCode(text: string) {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i} className='bg-gray-800 px-1 py-0.5 rounded'>{part.slice(1, -1)}</code>;
    }
    return part;
  });
}

export default function App() {
  return (
    <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-16 px-4 pt-12">
      <SpiderWeb />

      {/* Notifications */}
      <div className="flex flex-col items-center gap-6 text-center">
        {notifications.map((n, i) => (
          <NotificationBoard key={i} type={n.type}>
            {renderInlineCode(n.text)}
          </NotificationBoard>
        ))}
      </div>

      {/* Description */}
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Rocket className="h-4 w-4 text-orange-600 dark:text-orange-400" />
          <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Next.js Starter Kit
          </span>
        </div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100">
          Build faster with a complete foundation
        </h1>
        <TechImages />
        <p className="max-w-xl text-lg text-gray-600 dark:text-gray-400">
          Everything you need to start building production-ready applications. TypeScript, Tailwind
          CSS, authentication, and neon postgresql database — all pre-configured
        </p>
      </div>
      <div className='flex flex-col gap-12'>
        <Features />
        <FolderStructure />
      </div>
      <div className="flex flex-col gap-4">
        <GitRepo />
        <Resources />
      </div>
      <Footer />
    </div>
  );
}

function GitRepo() {
  return (
    <div className="flex items-center gap-2">
      <p className="text-sm font-medium text-gray-400">Repository</p>
    <div className="flex items-center gap-2">
      <GitBranch className="h-4 w-4 text-gray-200" / >
      <a className="dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors" href="https://github.com/staystrongbg/next-starter" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </div>
    </div>
  );
}

function Resources() {
  return( 
      <div className="flex items-center gap-2 text-sm text-gray-100">
        <div className="text-sm font-medium dark:text-gray-400">Resources</div>
        <div className="flex items-center gap-3">
          {resources.map((resource) => (
            <div key={resource.name} className="flex items-center gap-1">
              {resource.img && <img src={resource.img} alt={resource.name} className="h-4 w-4" />}
              <a className="dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors" href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.name}
              </a>
            </div>
          ))}
        </div>
      </div>
  )
}

function TechImages() {
  return (
    <div className='flex gap-6 py-8'>
      {techImages.map((techImg) => (
        <div key={techImg.alt} className="rounded-lg p-2 transition-all duration-300 hover:bg-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30">
          <img src={techImg.src} alt={techImg.alt} className="h-8 w-8 transition-all duration-300 hover:scale-110" title={techImg.title} />
        </div>
      ))}
    </div>
  );
}

function Features() {
  return (
    <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map(feature => (
        <div
          key={feature.title}
          className="group flex flex-col gap-4 rounded-xl border border-gray-200 bg-gray-50 p-6 transition-all hover:shadow-md dark:border-indigo-900/50 dark:bg-slate-800/50 dark:backdrop-blur-sm dark:hover:border-indigo-500/50 dark:hover:shadow-indigo-500/10"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg text-blue-600 dark:bg-indigo-950 dark:text-indigo-400">
            <feature.icon className="h-5 w-5 text-blue-600 dark:text-indigo-400" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">{feature.title}</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function FolderStructure() {
  return (
    <div className="w-full" aria-label="Project structure">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Project Structure</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">Explore the folder structure of Next-Starter</p>
      </div>
      <div className="h-[50vh] w-full overflow-y-scroll rounded-xl border border-gray-200 dark:border-indigo-900/50 bg-slate-900">
        <div className="bg-slate-800 px-4 py-2 text-xs font-medium text-orange-500 dark:text-orange-400">
          next-starter/
        </div>
        <div className="p-4">
          <div className="font-mono text-sm">
            {fileTree.map((item, index) => {
              const isFolder = item.type === 'folder';
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 py-1 text-gray-200 dark:text-gray-300"
                  style={{ paddingLeft: `${item.indent * 1.5}rem` }}
                >
                  {isFolder ? (
                    <Folder className="h-4 w-4 text-blue-500 dark:text-cyan-400" />
                  ) : (
                    <FileCode className="h-4 w-4 text-gray-400 dark:text-gray-600" />
                  )}
                  <span
                    className={
                      isFolder
                        ? 'text-blue-500 dark:text-cyan-400'
                        : 'text-gray-700 dark:text-gray-300'
                    }
                  >
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}