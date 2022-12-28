import React from "react";

function useDebounce(value: any, delay: number): any {
  const [deboucedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return deboucedValue;
}

function useFilter(articles: [object], filter: string): any {
  const debouncedFilter = useDebounce(filter, 500);
  return articles.filter((article: any) => {
    return article.frontMatter.title
      .toLowerCase()
      .includes(debouncedFilter.toLowerCase());
  });
}

export default useFilter;
