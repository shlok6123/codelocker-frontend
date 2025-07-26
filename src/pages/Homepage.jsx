import SnippetForm from '../components/SnippetForm';
import SnippetList from '../components/SnippetList';

function HomePage({ snippets, onAddSnippet, onDeleteSnippet, onEditSnippet }) {
  return (
    <>
      <SnippetForm onAddSnippet={onAddSnippet} />
      <SnippetList
        snippets={snippets}
        onDeleteSnippet={onDeleteSnippet}
        onEditSnippet={onEditSnippet}
      />
    </>
  );
}

export default HomePage;