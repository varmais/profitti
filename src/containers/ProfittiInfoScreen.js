import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from '../helpers/Styles';
import config from '../config';

export default class ProfittiInfoScreen extends Component {
  static navigationOptions = {
    header: {
      style: styles.header,
      tintColor: config.colors.white,
      title: 'Profitti'
    }
  };
  
  render() {
    return (
      <ScrollView style={styles.background}>
        <View style={styles.container}>
          <Text style={[styles.text, styles.title]}>Puheenjohtajan terveiset</Text>
          <Text style={styles.text}>Arvon tradenomikollega,</Text>
          <Text style={styles.text}>onnittelen sinua, sillä edessäsi on maailman ensimmäinen
            tradenomiopiskelijaliiton laulukirja. En tiedä tuoksuuko edessä oleva kappaleesi tuoreelle painomusteelle
            vai sitseillä läikkyneelle snapsille, mutta tärkeintä ovat tulevat laulukerrat ja hyvät hetket, joita tämän
            kirjan ääressä tulet viettämään.</Text>
          <Text style={styles.text}>Opiskelijalaulujen perinteet ovat olleet keskuudessamme jo
            pitkään, mutta vasta vuonna 2014 aloimme koota laulukirjaa niin tutuista kuin hieman tuoreemmistakin
            veisuista. Kokoamistyöstä tahdon erityisesti kiittää Tradenomiopiskelijaliiton vuoden 2014 liittohallitusta,
            joka teki Elias Lönnrotin kaltaista työtä kulkiessaan ja kerätessään lauluja kansien väliin. Suuri kiitos
            menee myös niille tradenomiopiskelijoille, jotka esittivät kappaleita tai ovat yksinkertaisesti olleet
            mukana laulamassa niitä. Lauluperinteemme ja kirjamme voima syntyy sen ahkerasta käytöstä, joten
            laulakaa!</Text>
          <Text style={[styles.text, styles.textTight]}>Anssi Ketopaikka</Text>
          <Text style={[styles.text, styles.textTight]}>puheenjohtaja</Text>
          <Text style={[styles.text]}>Tradenomiopiskelijaliitto TROL ry</Text>
        </View>

        <View style={[styles.container, styles.containerLast]}>
          <Text style={[styles.text, styles.title]}>Laulukirjatyöryhmän terveiset</Text>
          <Text style={styles.text}>Ave, tradenomi!</Text>
          <Text style={styles.text}>Käsissäsi on pala historiaa: Tradenomiopiskelijaliitto TROL
            ry:n ensimmäinen laulukirja, Profitti. Profitti on tärkeä palanen tradenomi-identiteetin ja -perinteen
            ainaisessa kehityksessä. Sen kansien sisään on koottu tradenomiopiskelijoiden lauluja sekä
            paikallisyhdistysten perinteitä ympäri Suomen, ja kiitos tästä kuuluu kaikille työhön
            osallistuneille.</Text>
          <Text style={styles.text}>Profitin myötä tradenomiopiskelijoiden kulttuuri saa yhden
            fyysisen muodon. Nyt voimme puhua meidän lauluista, meidän laulukirjasta ja meidän opiskelijakulttuurista.
            Tämän historiallisen teoksen myötä osa meidän yhteistä kulttuuriamme on ajan hampaan ja muistia pimentävien
            iltojen tavoittamattomissa. Samalla myös sinun vastuusi, hyvä lukija, tämän kulttuuriperinnön vaalimiseen ja
            levittämiseen on suurempi kuin koskaan.</Text>
          <Text style={styles.text}>Kaikki ne hienot hetket, joissa tämä kirja on mukana, on osa
            tuota tradenomiopiskelijoiden kulttuuriperintöä. Me laulukirjatyöryhmän jäsenet luotammekin sinuun, että
            otat Profitista ja opiskeluajastasi kaiken irti!</Text>
          <Text style={[styles.text, styles.textTight]}>“To you from failing hands we throw the torch,</Text>
          <Text style={styles.text}>be yours to hold it high.” - In Flanders Fields</Text>
          <Text style={[styles.text, styles.textTight]}>Laulukirjatyöryhmä</Text>
          <Text style={[styles.text, styles.textTight]}>Osmo Ahonen</Text>
          <Text style={[styles.text, styles.textTight]}>Hannes Leppäkangas</Text>
          <Text style={[styles.text]}>Teemu Tiilikainen</Text>
        </View>
      </ScrollView>
    );
  }
}
