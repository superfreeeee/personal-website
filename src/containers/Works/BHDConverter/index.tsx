import styles from './index.module.scss';

import React, { ChangeEvent, ChangeEventHandler, FC, Fragment, useState } from 'react';

enum TargetType {
  BINARY,
  QUANTERNARY,
  OCTONARY,
  DECIMAL,
  HEX,
}

const targetConfig = [
  { label: '2进制', type: TargetType.BINARY },
  { label: '4进制', type: TargetType.QUANTERNARY },
  { label: '8进制', type: TargetType.OCTONARY },
  { label: '10进制', type: TargetType.DECIMAL },
  { label: '16进制', type: TargetType.HEX },
];

const useNumberInput = (): [string, ChangeEventHandler<HTMLInputElement>] => {
  const [value, setValue] = useState('');

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value))) {
      setValue(value);
    }
  };

  return [value, onInputChange];
};

const calcTarget = (num: number): { [type in TargetType]: string } => {
  const binary = num.toString(2);
  const binaryStr = binary.padStart(Math.ceil(binary.length / 4) * 4, '0');

  const result = {
    [TargetType.BINARY]: binaryStr,
    [TargetType.QUANTERNARY]: num.toString(4).padStart(binaryStr.length, '0'),
    [TargetType.OCTONARY]: num.toString(8).padStart(binaryStr.length, '0'),
    [TargetType.DECIMAL]: num.toString(10).padStart(binaryStr.length, '0'),
    [TargetType.HEX]: num.toString(16).padStart(binaryStr.length, '0'),
  };

  return result;
};

const BHDConverter: FC = () => {
  const [value, onValueChange] = useNumberInput();

  const result = calcTarget(Number(value));

  return (
    <div className={styles.container}>
      <h3>BHD Converter</h3>
      <input type="text" value={value} onChange={onValueChange} />
      <div className={styles.target}>
        {targetConfig.map(({ label, type }) => {
          return (
            <Fragment key={type}>
              <div>{label}</div>
              <div>{result[type]}</div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default BHDConverter;
