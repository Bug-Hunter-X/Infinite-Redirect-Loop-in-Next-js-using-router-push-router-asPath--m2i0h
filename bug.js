```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // This will cause an infinite redirect loop
    router.push(router.asPath);
  };

  return (
    <button onClick={handleClick}>Click Me</button>
  );
}

```