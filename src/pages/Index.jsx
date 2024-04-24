import { useState } from "react";
import { Box, Input, Button, List, ListItem, ListIcon, IconButton, Heading } from "@chakra-ui/react";
import { FaTrash, FaPlus } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <Box maxW="md" mx="auto" mt="10">
      <Heading mb="8" textAlign="center">
        Todo List
      </Heading>
      <Box display="flex" mb="4">
        <Input placeholder="Add new todo" value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} />
        <IconButton icon={<FaPlus />} colorScheme="blue" ml="2" onClick={handleAddTodo} aria-label="Add todo" />
      </Box>
      <List spacing={3}>
        {todos.map((todo, index) => (
          <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center">
            {todo}
            <IconButton icon={<FaTrash />} colorScheme="red" onClick={() => handleDeleteTodo(index)} aria-label="Delete todo" />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
