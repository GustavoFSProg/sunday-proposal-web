import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Ul = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 2px solid #004080;
  border-radius: 5px;
  width: 100%;
  background: #e6e6e6;
`

export const Li = styled.ul`
  list-style: none;
  font-size: 17px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  padding-left: 7px;
  padding-right: 10px;
  padding-bottom: 10px;
`
export const Button = styled.button`
  width: 37%;
  background: #0080ff;
  color: white;
  height: 41px;
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
