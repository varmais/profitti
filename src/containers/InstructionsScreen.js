import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from '../helpers/Styles';
import config from '../config';

export default class InstructionsScreen extends Component {
  static navigationOptions = {
    header: {
      style: styles.header,
      tintColor: config.colors.white,
      title: 'Ohjeita'
    }
  };

  render() {
    return (
      <ScrollView style={styles.background}>
        <View style={styles.container}>
          <Text style={[styles.text, styles.title]}>Saapuminen sitseille</Text>
          <Text style={styles.text}>• Sitsit alkavat etukäteen ilmoitettuna aikana.</Text>
          <Text style={styles.text}>• Sitseille on saavuttava ajoissa ilman akateemisia vapauksia, noin puoli tuntia
            ennen määräaikaa.</Text>
          <Text style={styles.text}>• Myöhästyneet henkilöt pyytävät nöyrästi seremoniamestarilta lupaa paikalleen
            istumiseen ja heitä myöhemmin rangaistakoon asiaan kuuluvasti.</Text>
          <Text style={styles.text}>• Laulun ja puheen aikana salissa ei liikuta.</Text>
          <Text style={styles.text}>• Plaseerausta toteltakoon, ellei seremoniamestari toisin määrää.</Text>
        </View>

        <View style={styles.container}>
          <Text style={[styles.text, styles.title]}>Yleisesti</Text>
          <Text style={styles.text}>• Illan korkea-arvoisin päättäjä on seremoniamestari. Hänen sanojaan kuultakoon ja
            noudatettakoon. Hänellä on ylin rangaistusvalta.</Text>
          <Text style={styles.text}>• Isäntä/emäntä on keittiön ylin päällikkö. Hän huolehtii tarjoilusta ja
            allergioiden puhkeamattomuudesta yhdessä tarjoilijoiden kanssa.</Text>
          <Text style={styles.text}>• Seremoniamestarin ollessa kykenemätön toimimaan isäntä/emäntä hänen valtaansa
            käyttäköön.</Text>
          <Text style={styles.text}>• Seremoniamestari voi määrätä erityisiä pöytänatseja kielimään huonotapaisista
            vieraista. Pöytänatsilla on oikeus ehdottaa rangaistusta etiketti-rikkomusten mukaan.</Text>
          <Text style={styles.text}>• Edellä mainittujen ja muiden puhetta pitäessä kaikki vaietkoon rangaistuksen
            uhalla.</Text>
          <Text style={styles.text}>• Kaikki kunnioittakoon ja olkoot kohteliaita toisilleen kurituksen uhalla.</Text>
          <Text style={styles.text}>• Pöydästä ei tule poistua ilman painavaa syytä. Seremoniamestari voi myöntää luvan
            pöydästä poistumiseen pakottavan tarpeen niin vaatiessa, jolloin pöydästä poistutaan nöyrästi
            pöytäseurueelta anteeksi pyytäen.</Text>
          <Text style={styles.text}>• Puheenvuoroa pyydettäessä käytetään asiaankuuluvia käytöstapoja.</Text>
          <Text style={styles.text}>• Ohjelmanumeroita voi esittää vapaasti, mutta niihin on syytä pyytää lupa ennen
            tapahtuman alkua, ellei halua rangaistuksen uhalla uudelleen esiintyä.</Text>
        </View>

        <View style={styles.container}>
          <Text style={[styles.text, styles.title]}>Ruokailusta</Text>
          <Text style={styles.text}>• Jokainen syököön ruokansa lautaselta ja nauttikoon juomansa lasista, tölkistä tahi
            pullosta, ellei seremoniamestari toisin määrää.</Text>
          <Text style={styles.text}>• Ruoka on pureskeltava kunnolla, jottei se tukkisi lavuaaria.</Text>
          <Text style={styles.text}>• Keskustelua älköön käytäkö pöydän alla muuten kuin pakottavan tarpeen
            johdosta.</Text>
        </View>

        <View style={styles.container}>
          <Text style={[styles.text, styles.title]}>Laulusta</Text>
          <Text style={styles.text}>• Laulutoiveet ilmoitettakoon hyvissä ajoin seremoniamestarille.</Text>
          <Text style={styles.text}>• Laulua ehdottava valmistautukoon aloittamaan laulun oikeassa sävelessä
            rangaistuksen uhalla. Hänen on ehdottomasti osallistuttava ja osattava ehdotettu laulu.</Text>
          <Text style={styles.text}>• Muut osallistukoon lauluun parhaan kykynsä mukaan.</Text>
          <Text style={styles.text}>• ”Tempo” –huudahdus laulun tahtia nopeuttakoon hyvän maun rajoissa.</Text>
          <Text style={styles.text}>• Ne, jotka ovat epävarmoja laulutaitonsa suhteen, pysytelkööt yhden tahdin edellä
            muita, jotta eivät laulun loppuessa jäisi muista jälkeen.</Text>
          <Text style={styles.text}>• ”Mellansup” –huudahduksella juodaan yhden kerran omasta juomaastiasta. Mellansup
            voidaan huutaa esimerkiksi säkeistöjen välillä.</Text>
          <Text style={styles.text}>• Laulun alettua kukaan ei kurkkuaan kostuttakoon, paitsi laulun sitä vaatiessa, ja
            ruokaansa koskekoon.</Text>
          <Text style={styles.text}>• Lauluja lauletaan runsaasti.</Text>
        </View>

        <View style={styles.container}>
          <Text style={[styles.text, styles.title]}>Maljoista</Text>
          <Text style={styles.text}>• Skoolatessa herrat ensin kohottavat maljan pöytä-avecilleen, tämän jälkeen
            vierustoverilleen ja sitten avecilleen. Siis: oikea-vaseneteen. Neidit kohottavat maljan toisinpäin:
            vasen-oikea-eteen.</Text>
          <Text style={styles.text}>• Jokainen on henkilökohtaisesti vastuussa juoma-astioiden nestetasapainosta. Tässä
            auttavat tarjoilijat, joita voidaan kutsua paikalle esimerkiksi lausumalla ”SNAPS!” selkeällä ja kuuluvalla
            äänellä.</Text>
          <Text style={styles.text}>• Yhteismaljaa ehdotettaessa pyydetään ensin puheenvuoro seremoniamestarilta.</Text>
          <Text style={styles.text}>• Pöytäseurue voi kohottaa maljan keskenään, ei kuitenkaan muun ohjelman
            aikana.</Text>
          <Text style={styles.text}>• Maljan kohottamiseen vastattakoon aina samanlaisella lasilla.</Text>
          <Text style={styles.text}>• Tyhjällä lasilla maljan kohottaminen on kiellettyä rangaistuksen uhalla.</Text>
        </View>

        <View style={styles.container}>
          <Text style={[styles.text, styles.title]}>Rangaistuksista</Text>
          <Text style={styles.text}>• Ken sääntöjä rikkoo, siitä rangaistuksen joutukoon kärsimään.</Text>
          <Text style={styles.text}>• Seremoniamestari valitsee rangaistuksia mielensä mukaan pöytänatsien ehdotuksesta
            tai isännän/emännän avustamana. Rangaistuksista ei voi valittaa.</Text>
          <Text style={styles.text}>• Rangaistusryypyt juotakoon aina tuolin päällä seisoen, jotta kaikki pahatapaisen
            kiusanhengen näkisivät.</Text>
        </View>

        <View style={styles.container}>
          <Text style={[styles.text, styles.title]}>Muuta</Text>
          <Text style={styles.text}>• Jokainen olostaan nauttikoon ja hauskaa pitäköön.</Text>
          <Text style={styles.text}>• Illan isäntää/emäntää ja tarjoilijoita kiitettäköön juhlien lopussa, esimerkiksi
            laululla.</Text>
        </View>

        <View style={styles.container}>
          <Text style={[styles.text, styles.title]}>Vastuullisille</Text>
          <Text style={styles.text}>• Pöydät laitettakoon valmiiksi hyvissä ajoin ennen sitsiväen saapumista. Plaseeraus
            tehdään pääasiassa tyttö-poika –periaatteella.</Text>
          <Text style={styles.text}>• Aikataulu on suunniteltava joustavaksi, sillä erinäiset viivästykset ovat illan
            aikana odotettavissa.</Text>
          <Text style={styles.text}>• Säädökset on tehty seremoniamestarin tueksi ja hän voi niitä halutessaan
            soveltaa.</Text>
        </View>

        <View style={styles.container}>
          <Text style={[styles.text, styles.title]}>Seremoniamestarille</Text>
          <Text style={styles.text}>• Rangaistuksia jaettakoon sääntöjen rikkomisesta, myöhästymisestä, häiritsevästä
            käyttäytymisestä ym. rikkomuksista.</Text>
          <Text style={styles.text}>• Hyväksi todettuja rangaistusmetodeja ovat mm. runonlausunta, yhteislaulu,
            näytelmä, alkoholiton juotava jne. sekä lievissä rikkomuksissa alkoholillinen snapsi.</Text>
          <Text style={styles.text}>• Seremoniamestari päättäköön rangaistusten täytäntöönpanosta ja voi soveltaa
            harkintansa mukaan rangaistuksia hyvän maun rajoissa.</Text>
        </View>
      </ScrollView>
    );
  }
}
