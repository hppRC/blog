


```typescript
  const copy = (contents: string) => {
    const copyFrom = document.createElement('textarea');
    copyFrom.textContent = contents;
    const bodyElm = document.getElementsByTagName('body')[0];

    bodyElm.appendChild(copyFrom);

    copyFrom.select();
    document.execCommand('copy');

    bodyElm.removeChild(copyFrom);
  };
```