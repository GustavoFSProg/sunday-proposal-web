import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`
export const Input = styled.input`
  width: 150%;
  height: 40px;
  font-size: 15px;
  padding-left: 12px;
  color: darkblue;
  border: 1px solid gray;
  border-radius: 8px;
  margin-bottom: 8px;
`

export const Button = styled.button`
  width: 156%;
  background: #0080ff;
  color: white;
  height: 40px;
  border-radius: 7px;
  border-color: transparent;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;

  &:hover {
    background: blue;
  }
`
