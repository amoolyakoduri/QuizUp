import  {
    SET_ERRORS
} from '../action-types';

export const createReport = (quiz) => dispatch => {

    let quiz = {
          curQues: 0,
          id: '123',
          duration: 15,
          questions: [
            {
              id: '604ba89cba4ae59568030782',
              options: [
                ' Annular slot antenna',
                ' Tapered slot antenna',
                ' Both annular and tapered',
                ' Neither annular nor tapered'
              ],
              question: 'Which of the following slot antenna radiation can be modified electronically by tunable capacitor?',
              objective: true,
              subTopic: 'Types of Slot Antennas',
              time: 0,
              status: 'Answered',
              elapsedTime: 0,
              ans: '1',
              instr: 'Select any ONE option.'
            },
            {
              id: '604ba8aeba4ae595680307cb',
              options: [
                ' Ground wave',
                ' Sky wave',
                ' Space wave',
                ' LOS'
              ],
              question: 'In which of the following modes of propagation the ionosphere acts as the reflecting surface for the waves?',
              objective: true,
              subTopic: 'Modes of Propagation',
              time: 0,
              status: 'Not Opened',
              elapsedTime: 0,
              ans: '',
              instr: 'Select any ONE option.'
            },
            {
              id: '604ba8a9ba4ae595680307b4',
              options: [
                ' \\(\\frac{L_N}{L_{N+1}} =τ\\) ',
                ' \\(\\frac{L_N}{L_{N+1}} =\\frac{1}{τ} \\) ',
                ' \\(\\frac{L_N}{L_{N+2}} =τ\\) ',
                ' \\(\\frac{L_{N+2}}{L_N} =τ\\) '
              ],
              question: 'The relation between the dipole lengths and the scaling factor τ in LPDA is given by _________',
              objective: true,
              subTopic: 'Introduction to Log Periodic Antenna',
              time: 0,
              status: 'Not Opened',
              elapsedTime: 0,
              ans: '',
              instr: 'Select any ONE option.'
            },
            {
              id: '604ba8b0ba4ae595680307d3',
              options: [
                ' Surface wave',
                ' Tropospheric wave',
                ' Ionospheric wave',
                ' Stratospheric waves'
              ],
              question: 'Which of the following propagates by gliding over the surface of earth?',
              objective: true,
              subTopic: 'Ground Wave Propagation',
              time: 0,
              status: 'Not Opened',
              elapsedTime: 0,
              ans: '',
              instr: 'Select any ONE option.'
            },
            {
              id: '604ba89dba4ae59568030787',
              options: [
                ' Directivity increases',
                ' Directivity decreases',
                ' Beam width decreases',
                ' Gain increases'
              ],
              question: 'Which of the following is false regarding Antenna array?',
              objective: true,
              subTopic: 'Introduction to Antenna Array',
              time: 0,
              status: 'Not Opened',
              elapsedTime: 0,
              ans: '',
              instr: 'Select any ONE option.'
            },
            {
              id: '604ba898ba4ae59568030772',
              options: [
                ' Horn',
                ' Feed antenna',
                ' Parabolic',
                ' Dipole'
              ],
              question: 'Which of the following is used as a secondary antenna in the reflector antenna?',
              objective: true,
              subTopic: 'Reflector Antenna Basics',
              time: 0,
              status: 'Not Opened',
              elapsedTime: 0,
              ans: '',
              instr: 'Select any ONE option.'
            },
            {
              id: '604ba8a9ba4ae595680307b6',
              options: [
                ' \\(\\frac{S_N}{S_{N+1}} = τ\\) ',
                ' \\(\\frac{S_N}{S_{N+1}} = \\frac{1}{τ} \\) ',
                ' \\(\\frac{S_N}{S_{N+2}} = τ\\) ',
                ' \\(\\frac{S_{N+2}}{S_N} = τ\\) '
              ],
              question: 'The relation between the dipole spacing and the scaling factor τ  in LPDA is given by _________',
              objective: true,
              subTopic: 'Introduction to Log Periodic Antenna',
              time: 0,
              status: 'Not Opened',
              elapsedTime: 0,
              ans: '',
              instr: 'Select any ONE option.'
            },
            {
              id: '604ba8bbba4ae595680307f3',
              options: [
                ' MUF is equal to critical frequency',
                ' MUF is greater than critical frequency',
                ' MUF is less than critical frequency',
                ' MUF is zero'
              ],
              question: 'Which of the following is true when a ray is incident normally in an Ionosphere region?',
              objective: true,
              subTopic: 'Maximum Usable Frequency',
              time: 0,
              status: 'Not Opened',
              elapsedTime: 0,
              ans: '',
              instr: 'Select any ONE option.'
            },
            {
              id: '604ba8b6ba4ae595680307e4',
              options: [
                ' It occurs in the region near to the mid-point of the transmitter and receiver',
                ' It occurs above the radio horizon',
                ' It travels beyond the line of sight distance',
                ' It occurs below the radio horizon'
              ],
              question: 'Which of the following statements regarding tropospheric scattering is false?',
              objective: true,
              subTopic: 'Tropospheric Scatter',
              time: 0,
              status: 'Not Opened',
              elapsedTime: 0,
              ans: '',
              instr: 'Select any ONE option.'
            },
            {
              id: '604ba8a7ba4ae595680307ae',
              options: [
                ' Spiral antenna',
                ' Log periodic antenna',
                ' Helical antenna',
                ' Parabolic antenna'
              ],
              question: 'Which of the following does not belongs to frequency independent antenna?',
              objective: true,
              subTopic: 'Rumsey Principle',
              time: 0,
              status: 'Not Opened',
              elapsedTime: 0,
              ans: '',
              instr: 'Select any ONE option.'
            }
          ]
        }

    // dispatch({
    //     type: SET_ERRORS,
    //     payload:
    //     });
}
