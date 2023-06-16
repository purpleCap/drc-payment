import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Table, Row, TableWrapper, Cell } from 'react-native-table-component';


class FruitGrid extends Component {

    constructor(props) {
        super(props);
    }  
    state = {
        selectedItems : [],
        data: []
    };
  
    refresh() {  
        let rows = [
          [69,'123','01-02-2022','23'],
          [70,'3334','13-03-2022','44'],
          [73,'999','15-03-2023','77']
        ];
        this.setState({data: rows});
    }
    componentDidMount()  {
        this.refresh(); 
    }
    setSelection(id) {
        const { selectedItems } = this.state;
        
        if (this.checkIfChecked(id,selectedItems))
        {
           this.setState({selectedItems: selectedItems.filter(i => i != id)});
        }
        else
        {
          let selectedItemsCopy = [...selectedItems]
          selectedItemsCopy.push(id)
          this.setState({selectedItems : selectedItemsCopy});
        }
    }

    checkIfChecked(id, selectedItems)
    {
       return selectedItems?.length && selectedItems.includes(id);
    }
    render() {
        const { selectedItems, data } = this.state;
        let columns = [
        'No.',
        'Date',
        'Amount',
        ''
    ];

        return (
            <View style={{ flex: 1 }}>
                <Table borderStyle={{borderWidth: 3, borderColor: '#c8e1ff', fontSize:16, fontWeight: 'bold'}}>
                    <Row data = {columns} />
                    {
                        data.map((rowData, index) =>   
                        (
                            <TableWrapper key={index}  style={styles.row}>
                                 <Cell key={1} data = {rowData[1]} textStyle={styles.text}/>
                                 <Cell key={2} data = {rowData[2]} textStyle={styles.text}/>
                                 <Cell key={3} data = {rowData[3]} textStyle={styles.text}/>
                                 <Cell key={0} data = {<CheckBox value={this.checkIfChecked(rowData[0],selectedItems)} onValueChange={()=>this.setSelection(rowData[0])} />} />
                            </TableWrapper>
                        )
                        )
                    }
                </Table>
            </View>
        );
  }
}

export default FruitGrid;

  const styles = StyleSheet.create({
    btn: { width: 58, height: 18, backgroundColor: '#8bbaf2',  borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#000000' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#d2d2d2', fontSize:16 },
  });