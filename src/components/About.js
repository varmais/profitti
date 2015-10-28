'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Component,
  View,
  Text,
  ScrollView,
  PixelRatio
  } = React;

var styles = StyleSheet.create({
  background: {
    backgroundColor: '#000000',
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  container: {
    paddingTop: 20,
    marginBottom: 80
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    color: '#ffffff'
  },
  marginBottom: {
    marginBottom: 20
  },
  separator: {
    height: 1 / PixelRatio.get(),
    backgroundColor: '#ffffff'
  }
});

class AboutPage extends Component {
  render() {
    return (
      <ScrollView style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.title}>Puheenjohtajan terveiset</Text>
          <Text style={[styles.text, styles.marginBottom]}>Arvon tradenomikollega,</Text>
          <Text style={[styles.text, styles.marginBottom]}>onnittelen sinua, sillä edessäsi on maailman ensimmäinen
            tradenomiopiskelijaliiton laulukirja. En tiedä tuoksuuko edessä oleva kappaleesi tuoreelle painomusteelle
            vai sitseillä läikkyneelle snapsille, mutta tärkeintä ovat tulevat laulukerrat ja hyvät hetket, joita tämän
            kirjan ääressä tulet viettämään.</Text>
          <Text style={[styles.text, styles.marginBottom]}>Opiskelijalaulujen perinteet ovat olleet keskuudessamme jo
            pitkään, mutta vasta vuonna 2014 aloimme koota laulukirjaa niin tutuista kuin hieman tuoreemmistakin
            veisuista. Kokoamistyöstä tahdon erityisesti kiittää Tradenomiopiskelijaliiton vuoden 2014 liittohallitusta,
            joka teki Elias Lönnrotin kaltaista työtä kulkiessaan ja kerätessään lauluja kansien väliin. Suuri kiitos
            menee myös niille tradenomiopiskelijoille, jotka esittivät kappaleita tai ovat yksinkertaisesti olleet
            mukana laulamassa niitä. Lauluperinteemme ja kirjamme voima syntyy sen ahkerasta käytöstä, joten
            laulakaa!</Text>
          <Text style={styles.text}>Anssi Ketopaikka</Text>
          <Text style={styles.text}>puheenjohtaja</Text>
          <Text style={styles.text}>Tradenomiopiskelijaliitto TROL ry</Text>
        </View>

        <View style={styles.separator}/>

        <View style={styles.container}>
          <Text style={styles.title}>Laulukirjatyöryhmän terveiset</Text>
          <Text style={[styles.text, styles.marginBottom]}>Ave, tradenomi!</Text>
          <Text style={[styles.text, styles.marginBottom]}>Käsissäsi on pala historiaa: Tradenomiopiskelijaliitto TROL
            ry:n ensimmäinen laulukirja, Profitti. Profitti on tärkeä palanen tradenomi-identiteetin ja -perinteen
            ainaisessa kehityksessä. Sen kansien sisään on koottu tradenomiopiskelijoiden lauluja sekä
            paikallisyhdistysten perinteitä ympäri Suomen, ja kiitos tästä kuuluu kaikille työhön
            osallistuneille.</Text>
          <Text style={[styles.text, styles.marginBottom]}>Profitin myötä tradenomiopiskelijoiden kulttuuri saa yhden
            fyysisen muodon. Nyt voimme puhua meidän lauluista, meidän laulukirjasta ja meidän opiskelijakulttuurista.
            Tämän historiallisen teoksen myötä osa meidän yhteistä kulttuuriamme on ajan hampaan ja muistia pimentävien
            iltojen tavoittamattomissa. Samalla myös sinun vastuusi, hyvä lukija, tämän kulttuuriperinnön vaalimiseen ja
            levittämiseen on suurempi kuin koskaan.</Text>
          <Text style={[styles.text, styles.marginBottom]}>Kaikki ne hienot hetket, joissa tämä kirja on mukana, on osa
            tuota tradenomiopiskelijoiden kulttuuriperintöä. Me laulukirjatyöryhmän jäsenet luotammekin sinuun, että
            otat Profitista ja opiskeluajastasi kaiken irti!</Text>
          <Text style={styles.text}>“To you from failing hands we throw the torch,</Text>
          <Text style={[styles.text, styles.marginBottom]}>be yours to hold it high.” - In Flanders Fields</Text>
          <Text style={styles.text}>Laulukirjatyöryhmä</Text>
          <Text style={styles.text}>Osmo Ahonen</Text>
          <Text style={styles.text}>Hannes Leppäkangas</Text>
          <Text style={styles.text}>Teemu Tiilikainen</Text>
        </View>
      </ScrollView>
    );
  }
}

module.exports = AboutPage;