import MarkdownLayout from '@/components/MardownLayout';

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <MarkdownLayout>
      {children}
    </MarkdownLayout>
  );
}
