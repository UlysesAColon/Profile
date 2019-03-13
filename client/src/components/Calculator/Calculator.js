import React , {Component} from 'react';
import update from 'immutability-helper';
import math from 'mathjs';
import './Calculator.css';
import CalculatorDisplay from './CalculatorParts/CalculatorDisplay';
import Button from './CalculatorParts/CalculatorButton';
import Buttons from './CalculatorParts/CalculatorButtons';





class Calculator extends Component{
    constructor() {
        super()
        this.state = { operations: [] }
    }

    calculateOperations = () => {
        let result = this.state.operations.join('')
        if (result) {
          result = math.eval(result)
          result = math.format(result, { precision: 14 })
          this.setState({
            operations: [result],
          })
        }
      }

      handleClick = e => {
        const value = e.target.getAttribute('data-value')
        switch (value) {
          case 'clear':
            this.setState({
              operations: [],
            })
            break
          case 'equal':
            this.calculateOperations()
            break
          default:
            const newOperations = update(this.state.operations, {
              $push: [value],
            })
            this.setState({
              operations: newOperations,
            })
            break
        }
      }

      onKeyPress = e => {
        const value = e.key;
    
        const allowed = [
          '1', '2', '3', '4',
          '5', '6', '7', '8',
          '9', '0', '+', '-', '*', '/', '=', '.',
          'Enter', 'equal', 'Escape', 'C',
          'Backspace'
        ];
    
        if (allowed.includes(value)) {
          switch (value) {
            case 'Escape':
              this.setState({
                operations: [],
              })
              break
            case 'Backspace':
              const backSpaceOperations = this.state.operations;
              backSpaceOperations.pop()
              this.setState({
                operations: backSpaceOperations,
              })
              break
            case '=':
            case 'Enter':
              this.calculateOperations()
              break
            default:
              const newOperations = update(this.state.operations, {
                $push: [value],
              })
              this.setState({
                operations: newOperations,
              })
              break
          }
        }
      }
    
      componentWillMount = (e) => {
        document.addEventListener("keydown", this.onKeyPress.bind(this));
      }
    
    
    render() {
        return (
          <div className="CalculatorApp">
            <CalculatorDisplay data={this.state.operations} />
            <Buttons>
              <Button onClick={this.handleClick} label="C" value="clear" />
              <Button onClick={this.handleClick} label="7" value="7" />
              <Button onClick={this.handleClick} label="4" value="4" />
              <Button onClick={this.handleClick} label="1" value="1" />
              <Button onClick={this.handleClick} label="0" value="0" />

              <Button onClick={this.handleClick} label="/" value="/" />
              <Button onClick={this.handleClick} label="8" value="8" />
              <Button onClick={this.handleClick} label="5" value="5" />
              <Button onClick={this.handleClick} label="2" value="2" />
              <Button onClick={this.handleClick} label="." value="." />

              <Button onClick={this.handleClick} label="x" value="*" />
              <Button onClick={this.handleClick} label="9" value="9" />
              <Button onClick={this.handleClick} label="6" value="6" />
              <Button onClick={this.handleClick} label="3" value="3" />
              <Button label="" value="null" />

              <Button onClick={this.handleClick} label="-" value="-" />
              <Button onClick={this.handleClick} label="+" size="2" value="+" />
              <Button onClick={this.handleClick} label="=" size="2" value="equal" />
            </Buttons>
          </div>
        );
}
}

export default Calculator;