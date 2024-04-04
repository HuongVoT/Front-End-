import styled from 'styled-components';
import StyledStatusBlock from './StatusBlock.style';

export interface IStatusBlockProps {}

enum status {
  
}

export default function StatusBlock({ status }: { status: string }) {
  if (status === 'ON') {
    const Status = styled(StyledStatusBlock)`
      border: 1px solid #389e0d;
    `;
  }
  return <StyledStatusBlock>{status}</StyledStatusBlock>;
}
