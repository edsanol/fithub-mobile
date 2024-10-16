import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {BackgoundComponent} from '../../../components';
import {SvgXml} from 'react-native-svg';
import {BackButton, FitHub} from '../../../assets/svg/iconSVG';
import {StackScreenProps} from '@react-navigation/stack';
import {ProfileStackParamList} from '../../../navigation/ProfileStackNavigation';

interface TermsAndConditionsProps
  extends StackScreenProps<ProfileStackParamList, 'TermsAndConditions'> {}

const TermsAndConditionsScreen = ({navigation}: TermsAndConditionsProps) => {
  return (
    <BackgoundComponent>
      <View style={{flex: 1, marginHorizontal: 16}} accessible={true}>
        <View
          style={{
            height: '6%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            accessibilityLabel="Botón para regresar al menú de perfil"
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}>
            <View
              style={{
                width: 54,
                height: 54,
                borderRadius: 27,
                borderWidth: 1,
                borderColor: '#6B7280',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <SvgXml
                xml={BackButton}
                height={20}
                color={'#FFFFFF'}
                style={{right: 2}}
              />
            </View>
          </TouchableOpacity>
          <View style={{right: 12}}>
            <SvgXml xml={FitHub} width={60} height={20} />
          </View>
        </View>
        <View style={{flex: 1, marginTop: 20}}>
          <ScrollView
            style={{flex: 1}}
            contentContainerStyle={{paddingBottom: 160, paddingTop: 4}}
            showsVerticalScrollIndicator={false}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                marginBottom: 12,
                color: '#FFFFFF',
                textAlign: 'center',
              }}>
              Términos y Condiciones de FitHub Connect
            </Text>
            <Text style={{fontSize: 12, marginBottom: 20, color: '#5871fe'}}>
              Fecha de Entrada en Vigencia: 11 de marzo de 2024
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 4,
                color: '#FFFFFF',
              }}>
              1. Introducción
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 20,
                color: '#989898',
                fontWeight: '300',
              }}>
              Bienvenidos a FitHub Connect , la plataforma digital diseñada para
              optimizar su experiencia fitness, permitiéndole llevar un registro
              y control detallado de su actividad física y progreso general. Al
              acceder y utilizar FitHub Connect, usted, (el "Usuario") , acepta
              estar vinculado por estos Términos y Condiciones ("Términos") . Si
              no está de acuerdo con los términos aquí establecidos, absténgase
              de utilizar esta aplicación.
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 4,
                color: '#FFFFFF',
              }}>
              2. Definiciones
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 4,
                color: '#989898',
                fontWeight: '300',
              }}>
              "Aplicación" se refiere a FitHub Connect, incluyendo todas sus
              páginas, contenido y funcionalidades disponibles para los usuarios
              a través de cualquier plataforma o dispositivo.
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 20,
                color: '#989898',
                fontWeight: '300',
              }}>
              "Usuario" hace referencia a cualquier persona que acceda o utilice
              nuestra Aplicación, ya sea directamente o a través de un gimnasio
              asociado con una membresía activa.
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 4,
                color: '#FFFFFF',
              }}>
              3. Uso de la Aplicación
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 4,
                color: '#989898',
                fontWeight: '300',
              }}>
              La Aplicación está exclusivamente disponible para usuarios que
              posean una membresía activa en un gimnasio asociado a FitHub
              Connect. El uso de la Aplicación está condicionado a la aceptación
              de estos Términos y al cumplimiento de las políticas del gimnasio
              asociado.
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 20,
                color: '#989898',
                fontWeight: '300',
              }}>
              Prohibimos estrictamente el uso de la Aplicación para actividades
              ilícitas, no autorizadas o que infrinjan los derechos de terceros,
              incluyendo, sin limitación, el plagio y la infracción de derechos
              de propiedad intelectual.
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 4,
                color: '#FFFFFF',
              }}>
              4. Cuentas de Usuario
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 4,
                color: '#989898',
                fontWeight: '300',
              }}>
              La creación de una cuenta es requisito para acceder a ciertas
              funcionalidades de la Aplicación. Usted es responsable de mantener
              la confidencialidad de su cuenta y contraseña, así como de todas
              las actividades que ocurran bajo su cuenta.
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 20,
                color: '#989898',
                fontWeight: '300',
              }}>
              FitHub Connect se reserva el derecho, sin previo aviso, de
              suspender o cancelar cuentas, editar o eliminar contenido y
              cancelar servicios en caso de sospecha de incumplimiento de estos
              Términos.
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 4,
                color: '#FFFFFF',
              }}>
              5. Propiedad Intelectual
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 20,
                color: '#989898',
                fontWeight: '300',
              }}>
              Todo contenido en FitHub Connect, incluyendo textos, gráficos,
              logos, imágenes y software, es propiedad exclusiva de FitHub
              Connect o se utiliza bajo licencia y está protegido por leyes de
              derechos de autor y tratados internacionales. El uso no autorizado
              de cualquier contenido puede violar estas leyes y
              reglamentaciones.
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 4,
                color: '#FFFFFF',
              }}>
              6. Privacidad y Protección de Datos
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 20,
                color: '#989898',
                fontWeight: '300',
              }}>
              FitHub Connect se compromete a proteger la privacidad y la
              seguridad de los datos personales de nuestros usuarios. Nuestra
              Política de Privacidad, disponible en la Aplicación y en nuestro
              sitio web, describe cómo recopilamos, usamos y protegemos su
              información personal.
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 4,
                color: '#FFFFFF',
              }}>
              7. Limitación de Responsabilidad
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 20,
                color: '#989898',
                fontWeight: '300',
              }}>
              En la medida máxima permitida por la ley, FitHub Connect no será
              responsable por daños indirectos, incidentales, especiales,
              consecuentes o punitivos resultantes del uso o incapacidad de uso
              de la Aplicación, incluso si FitHub Connect ha sido advertido de
              la posibilidad de tales daños.
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 4,
                color: '#FFFFFF',
              }}>
              8. Modificaciones a los Términos y Condiciones
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 20,
                color: '#989898',
                fontWeight: '300',
              }}>
              FitHub Connect se reserva el derecho de modificar estos Términos
              en cualquier momento. Las modificaciones entrarán en vigor
              inmediatamente después de su publicación en la Aplicación o el
              sitio web. El uso continuado de la Aplicación tras dichas
              modificaciones constituye la aceptación de los nuevos Términos.
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 4,
                color: '#FFFFFF',
              }}>
              9. Legislación Aplicable y Jurisdicción
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 20,
                color: '#989898',
                fontWeight: '300',
              }}>
              Estos Términos se regirán e interpretarán de acuerdo con las leyes
              de Colombia. Cualquier disputa o reclamación derivada del uso de
              la Aplicación se resolverá exclusivamente en los tribunales
              competentes de Colombia.
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 4,
                color: '#FFFFFF',
              }}>
              10. Contacto
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 20,
                color: '#989898',
                fontWeight: '300',
              }}>
              Para consultas o preocupaciones relacionadas con estos Términos,
              por favor, contáctenos en fithubconnectplus@gmail.com.
            </Text>
          </ScrollView>
        </View>
      </View>
    </BackgoundComponent>
  );
};

export default TermsAndConditionsScreen;
