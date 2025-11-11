const PageContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-0 select-none">
      {children}
    </main>
  );
};

export default PageContainer;
