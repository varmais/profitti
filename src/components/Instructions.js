'use strict';

var React = require('react-native');
var styles = require('../modules/styles');
var {
  StyleSheet,
  Component,
  View,
  Text,
  ScrollView
  } = React;

class InstructionsPage extends Component {
  render() {
    return (
      <ScrollView style={styles.background}>
        <View style={[styles.container, styles.marginBottom]}>
          <Text style={styles.title}>Saapuminen sitseille</Text>
          <Text style={[[styles.text, styles.smallMarginBottom], styles.smallMarginBottom]}>• Sitsit alkavat etukäteen ilmoitettuna aikana.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Sitseille on saavuttava ajoissa ilman akateemisia vapauksia, noin puoli tuntia
            ennen määräaikaa.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Myöhästyneet henkilöt pyytävät nöyrästi seremoniamestarilta lupaa paikalleen
            istumiseen ja heitä myöhemmin rangaistakoon asiaan kuuluvasti.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Laulun ja puheen aikana salissa ei liikuta.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Plaseerausta toteltakoon, ellei seremoniamestari toisin määrää.</Text>
        </View>

        <View style={[styles.container, styles.marginBottom]}>
          <Text style={styles.title}>Yleisesti</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Illan korkea-arvoisin päättäjä on seremoniamestari. Hänen sanojaan kuultakoon ja
            noudatettakoon. Hänellä on ylin rangaistusvalta.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Isäntä/emäntä on keittiön ylin päällikkö. Hän huolehtii tarjoilusta ja
            allergioiden puhkeamattomuudesta yhdessä tarjoilijoiden kanssa.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Seremoniamestarin ollessa kykenemätön toimimaan isäntä/emäntä hänen valtaansa
            käyttäköön.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Seremoniamestari voi määrätä erityisiä pöytänatseja kielimään huonotapaisista
            vieraista. Pöytänatsilla on oikeus ehdottaa rangaistusta etiketti-rikkomusten mukaan.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Edellä mainittujen ja muiden puhetta pitäessä kaikki vaietkoon rangaistuksen
            uhalla.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Kaikki kunnioittakoon ja olkoot kohteliaita toisilleen kurituksen uhalla.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Pöydästä ei tule poistua ilman painavaa syytä. Seremoniamestari voi myöntää luvan
            pöydästä poistumiseen pakottavan tarpeen niin vaatiessa, jolloin pöydästä poistutaan nöyrästi
            pöytäseurueelta anteeksi pyytäen.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Puheenvuoroa pyydettäessä käytetään asiaankuuluvia käytöstapoja.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Ohjelmanumeroita voi esittää vapaasti, mutta niihin on syytä pyytää lupa ennen
            tapahtuman alkua, ellei halua rangaistuksen uhalla uudelleen esiintyä.</Text>
        </View>

        <View style={[styles.container, styles.marginBottom]}>
          <Text style={styles.title}>Ruokailusta</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Jokainen syököön ruokansa lautaselta ja nauttikoon juomansa lasista, tölkistä tahi
            pullosta, ellei seremoniamestari toisin määrää.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Ruoka on pureskeltava kunnolla, jottei se tukkisi lavuaaria.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Keskustelua älköön käytäkö pöydän alla muuten kuin pakottavan tarpeen
            johdosta.</Text>
        </View>

        <View style={[styles.container, styles.marginBottom]}>
          <Text style={styles.title}>Laulusta</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Laulutoiveet ilmoitettakoon hyvissä ajoin seremoniamestarille.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Laulua ehdottava valmistautukoon aloittamaan laulun oikeassa sävelessä
            rangaistuksen uhalla. Hänen on ehdottomasti osallistuttava ja osattava ehdotettu laulu.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Muut osallistukoon lauluun parhaan kykynsä mukaan.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• ”Tempo” –huudahdus laulun tahtia nopeuttakoon hyvän maun rajoissa.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Ne, jotka ovat epävarmoja laulutaitonsa suhteen, pysytelkööt yhden tahdin edellä
            muita, jotta eivät laulun loppuessa jäisi muista jälkeen.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• ”Mellansup” –huudahduksella juodaan yhden kerran omasta juomaastiasta. Mellansup
            voidaan huutaa esimerkiksi säkeistöjen välillä.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Laulun alettua kukaan ei kurkkuaan kostuttakoon, paitsi laulun sitä vaatiessa, ja
            ruokaansa koskekoon.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Lauluja lauletaan runsaasti.</Text>
        </View>

        <View style={[styles.container, styles.marginBottom]}>
          <Text style={styles.title}>Maljoista</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Skoolatessa herrat ensin kohottavat maljan pöytä-avecilleen, tämän jälkeen
            vierustoverilleen ja sitten avecilleen. Siis: oikea-vaseneteen. Neidit kohottavat maljan toisinpäin:
            vasen-oikea-eteen.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Jokainen on henkilökohtaisesti vastuussa juoma-astioiden nestetasapainosta. Tässä
            auttavat tarjoilijat, joita voidaan kutsua paikalle esimerkiksi lausumalla ”SNAPS!” selkeällä ja kuuluvalla
            äänellä.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Yhteismaljaa ehdotettaessa pyydetään ensin puheenvuoro seremoniamestarilta.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Pöytäseurue voi kohottaa maljan keskenään, ei kuitenkaan muun ohjelman
            aikana.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Maljan kohottamiseen vastattakoon aina samanlaisella lasilla.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Tyhjällä lasilla maljan kohottaminen on kiellettyä rangaistuksen uhalla.</Text>
        </View>

        <View style={[styles.container, styles.marginBottom]}>
          <Text style={styles.title}>Rangaistuksista</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Ken sääntöjä rikkoo, siitä rangaistuksen joutukoon kärsimään.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Seremoniamestari valitsee rangaistuksia mielensä mukaan pöytänatsien ehdotuksesta
            tai isännän/emännän avustamana. Rangaistuksista ei voi valittaa.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Rangaistusryypyt juotakoon aina tuolin päällä seisoen, jotta kaikki pahatapaisen
            kiusanhengen näkisivät.</Text>
        </View>

        <View style={[styles.container, styles.marginBottom]}>
          <Text style={styles.title}>Muuta</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Jokainen olostaan nauttikoon ja hauskaa pitäköön.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Illan isäntää/emäntää ja tarjoilijoita kiitettäköön juhlien lopussa, esimerkiksi
            laululla.</Text>
        </View>

        <View style={[styles.container, styles.marginBottom]}>
          <Text style={styles.title}>Vastuullisille</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Pöydät laitettakoon valmiiksi hyvissä ajoin ennen sitsiväen saapumista. Plaseeraus
            tehdään pääasiassa tyttö-poika –periaatteella.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Aikataulu on suunniteltava joustavaksi, sillä erinäiset viivästykset ovat illan
            aikana odotettavissa.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Säädökset on tehty seremoniamestarin tueksi ja hän voi niitä halutessaan
            soveltaa.</Text>
        </View>

        <View style={[styles.container, styles.lastContainer]}>
          <Text style={styles.title}>Seremoniamestarille</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Rangaistuksia jaettakoon sääntöjen rikkomisesta, myöhästymisestä, häiritsevästä
            käyttäytymisestä ym. rikkomuksista.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Hyväksi todettuja rangaistusmetodeja ovat mm. runonlausunta, yhteislaulu,
            näytelmä, alkoholiton juotava jne. sekä lievissä rikkomuksissa alkoholillinen snapsi.</Text>
          <Text style={[styles.text, styles.smallMarginBottom]}>• Seremoniamestari päättäköön rangaistusten täytäntöönpanosta ja voi soveltaa
            harkintansa mukaan rangaistuksia hyvän maun rajoissa.</Text>
        </View>
      </ScrollView>
    );
  }
}

module.exports = InstructionsPage;