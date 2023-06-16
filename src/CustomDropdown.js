import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
  } from 'react-native';
  import React, {useRef, useState} from 'react';
  const countries = [
    {country: 'Afghanistan', code: '93', iso: 'AF'},
    {country: 'Albania', code: '355', iso: 'AL'},
    {country: 'Algeria', code: '213', iso: 'DZ'},
    {country: 'American Samoa', code: '1-684', iso: 'AS'},
    {country: 'Andorra', code: '376', iso: 'AD'},
    {country: 'Angola', code: '244', iso: 'AO'},
    {country: 'Anguilla', code: '1-264', iso: 'AI'},
    {country: 'Antarctica', code: '672', iso: 'AQ'},
    {country: 'Antigua and Barbuda', code: '1-268', iso: 'AG'},
    {country: 'Argentina', code: '54', iso: 'AR'},
    {country: 'Armenia', code: '374', iso: 'AM'},
    {country: 'Aruba', code: '297', iso: 'AW'},
    {country: 'Australia', code: '61', iso: 'AU'},
    {country: 'Austria', code: '43', iso: 'AT'},
    {country: 'Azerbaijan', code: '994', iso: 'AZ'},
    {country: 'Bahamas', code: '1-242', iso: 'BS'},
    {country: 'Bahrain', code: '973', iso: 'BH'},
    {country: 'Bangladesh', code: '880', iso: 'BD'},
  ];
  const CustomDropdown = () => {
    const [search, setSearch] = useState('');
    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState(countries);
    const [selectedCountry, setSelectedCountry] = useState('');
    const searchRef = useRef();
    const onSearch = search => {
      if (search !== '') {
        let tempData = data.filter(item => {
          return item.country.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
        setData(tempData);
      } else {
        setData(countries);
      }
    };
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={{
            width: '90%',
            height: 50,
            borderRadius: 10,
            borderWidth: 0.5,
            alignSelf: 'center',
            marginTop: 100,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 15,
            paddingRight: 15,
          }}
          onPress={() => {
            setClicked(!clicked);
          }}>
          <Text style={{fontWeight:'600'}}>
            {selectedCountry == '' ? 'Select Country' : selectedCountry}
          </Text>
          {clicked ? (
            <Image
              source={require('./assets/upload.png')}
              style={{width: 20, height: 20}}
            />
          ) : (
            <Image
              source={require('./assets/dropdown.png')}
              style={{width: 20, height: 20}}
            />
          )}
        </TouchableOpacity>
        {clicked ? (
          <View
            style={{
              elevation: 5,
              marginTop: 20,
              height: 300,
              alignSelf: 'center',
              width: '90%',
              backgroundColor: '#fff',
              borderRadius: 10,
            }}>
            <TextInput
              placeholder="Search.."
              value={search}
              ref={searchRef}
              onChangeText={txt => {
                onSearch(txt);
                setSearch(txt);
              }}
              style={{
                width: '90%',
                height: 50,
                alignSelf: 'center',
                borderWidth: 0.2,
                borderColor: '#8e8e8e',
                borderRadius: 7,
                marginTop: 20,
                paddingLeft: 20,
              }}
            />
  
            <FlatList
              data={data}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                      width: '85%',
                      alignSelf: 'center',
                      height: 50,
                      justifyContent: 'center',
                      borderBottomWidth: 0.5,
                      borderColor: '#8e8e8e',
                    }}
                    onPress={() => {
                      setSelectedCountry(item.country);
                      setClicked(!clicked);
                      onSearch('');
                      setSearch('');
                    }}>
                    <Text style={{fontWeight: '600'}}>{item.country}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}
      </View>
    );
  };
  
  export default CustomDropdown;
  