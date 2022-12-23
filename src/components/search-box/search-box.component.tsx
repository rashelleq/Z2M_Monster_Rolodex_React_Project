import { ChangeEventHandler } from 'react';
import './search-box.styles.css';

//const func: (a: string, b: number, c: boolean) => void = (a, b, c) => {};
//const func: (a: string, b: number, c: boolean) => boolean = (a, b, c) => {
//return true;
//};

//interface and types for objects

// interface ISearchBoxProps extends IChangeHandlerProps {
//   className: string;
//   placeholder?: string;
//? above = optional, will get a string or null
//}

//interface IChangeHandlerProps {
//onChangeHandler: (a: string) => void;
//}

//OR

// interface ISearchBoxProps {
//   className: string;
//   placeholder?: string;
//   //? above = optional, will get a string or null
// }

// interface ISearchBoxProps {
//   onChangeHandler: (a: string) => void;
// }
//Interfaces are used for object oriented style
//Types are used for functional programming

//Types with unions

// type CanadianAddress = {
//   street: string;
//   province: string;
// };

// type USAddress = {
//   street: string;
//   state: string;
// };

// type ItalianAddress = {
//   street: string;
//   region: string;
// };

// type WorldAddress = CanadianAddress | USAddress | ItalianAddress;

// const Address: WorldAddress = {
//   street: 'dfsfd',
//   state: 'dfsdf',
//   region: '',
// };

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => {
  return (
    <input
      type='search'
      className={`search-box ${className}`}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
