import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function PillBadge(tags: string[]) {
  return (
    <Stack direction="horizontal" gap={2}>
        {tags.map((tags,idx)=> (<Badge key={idx} pill bg="dark">
            {tags}
        </Badge>))}
    </Stack>
  );
}

export default PillBadge;