import SnippetForm from '../components/SnippetForm';
import SnippetList from '../components/SnippetList';

// Note: We need to pass snippets and the add function as props later
function HomePage({ snippets, onAddSnippet }) {
  return (
    <>
      <SnippetForm onAddSnippet={onAddSnippet} />
      <SnippetList snippets={snippets} />
    </>
  );
}

export default HomePage;