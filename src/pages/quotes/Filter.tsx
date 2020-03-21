import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';

interface Props {
  onUpdate: (values: any) => void;
}

const Filter: React.FC<Props> = (props: Props) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = (e: any) => {
    const { value } = e.target;

    setQuery(value);
    props.onUpdate({
      query: value,
    });
  };

  return (
    <Form inline>
      <FormGroup controlId="query">
        <Form.Label>Query:</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          value={query}
          onChange={handleQueryChange}
        />
      </FormGroup>
    </Form>
  );
};

export default Filter;
