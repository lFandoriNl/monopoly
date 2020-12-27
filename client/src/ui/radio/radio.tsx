import styled from 'styled-components/macro';

const other = '#fff';
const primary = '#5fe0ff';

const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;

  margin: 12px 0;

  cursor: pointer;
  position: relative;

  /* input */
  input {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  /* .design */
  .design {
    width: 16px;
    height: 16px;

    border: 1px solid ${other};
    border-radius: 100%;
    margin-right: 16px;

    position: relative;
  }

  .design::before,
  .design::after {
    content: '';
    display: block;

    width: inherit;
    height: inherit;

    border-radius: inherit;

    position: absolute;
    transform: scale(0);
    transform-origin: center center;
  }

  .design:before {
    background: ${other};
    opacity: 0;
    transition: 0.3s;
  }

  .design::after {
    background: ${primary};
    opacity: 0.4;
    transition: 0.6s;
  }

  /* .text */
  .text {
    color: ${other};
    font-weight: bold;
  }

  /* checked state */
  input:checked + .design::before {
    opacity: 1;
    transform: scale(0.6);
  }

  /* other states */
  input:hover + .design,
  input:focus + .design {
    border: 1px solid ${primary};
  }

  input:hover + .design:before,
  input:focus + .design:before {
    background: ${primary};
  }

  input:hover ~ .text {
    color: ${primary};
  }

  input:focus + .design::after,
  input:active + .design::after {
    opacity: 0.1;
    transform: scale(2.6);
  }
`;

type RadioProps<T> = {
  name: string;
  label: React.ReactNode;
  checked?: boolean;
  value?: string | number | readonly string[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Radio<T>({ label, ...otherProps }: RadioProps<T>) {
  return (
    <Label>
      <input type="radio" {...otherProps} />
      <span className="design"></span>
      <span className="text">{label}</span>
    </Label>
  );
}
