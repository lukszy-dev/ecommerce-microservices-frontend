import { VFC } from 'react';

interface InputProps {
  id: string;
  label: string;
}

const Input: VFC<InputProps> = ({ id, label }) => {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        id={id}
        type="text"
        className="focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-3 mb-3 border-gray-300 rounded-lg"
      />
    </div>
  );
};

export default Input;
