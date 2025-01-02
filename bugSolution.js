```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleClick = () => {
    // Set a flag to trigger redirect once
    setShouldRedirect(true);
  };

  useEffect(() => {
    if (shouldRedirect) {
      // Use router.replace for same-page navigation without adding history entry
      router.replace('/new-path');
    }
  }, [shouldRedirect, router]);

  return (
    <button onClick={handleClick}>Click Me</button>
  );
}

```