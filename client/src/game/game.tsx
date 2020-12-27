import { Cell } from './board/cell';
import { board } from './board-settings';
import { Board } from './board-styled';
// To Do : add game table
export function Game() {
  return (
    <Board>
      <div className="responsive">
        <div className="mainSquare">
          <div className="row top">
            <div className="square2">
              <span className="corner corner1">
                free <br /> parking
              </span>
            </div>
            <div className="square1">
              <div className="header header-top red"></div>
              <div className="firstLine firstLine-top rotation2">
                kentucky <br /> avenue
              </div>
            </div>
            <div className="square1">
              <div className="firstLine firstLine-top no-color rotation2">
                chance
              </div>
            </div>
            <div className="square1">
              <div className="header header-top red"></div>
              <div className="firstLine firstLine-top rotation2">
                indiana <br /> avenue
              </div>
            </div>
            <div className="square1">
              <div className="header header-top red"></div>
              <div className="firstLine firstLine-top rotation2">
                illinios <br /> avenue
              </div>
            </div>
            <div className="square1">
              <div className="firstLine firstLine-top no-color rotation2">
                b. & o. <br /> railroad
              </div>
            </div>
            <div className="square1">
              <div className="header header-top yellow"></div>
              <div className="firstLine firstLine-top rotation2">
                atlantic <br /> avenue
              </div>
            </div>
            <div className="square1">
              <div className="header header-top yellow"></div>
              <div className="firstLine firstLine-top rotation2">
                ventnor <br /> avenue
              </div>
            </div>
            <div className="square1">
              <div className="firstLine firstLine-top no-color rotation2">
                water <br /> works
              </div>
            </div>
            <div className="square1">
              <div className="header header-top yellow"></div>
              <div className="firstLine firstLine-top rotation2">
                marvin <br /> gardens
              </div>
            </div>
            <div className="square2">
              <span className="corner corner2">
                go to
                <br />
                jail
              </span>
            </div>
          </div>

          <div className="row center">
            <div className="square2">
              <div className="squareSide">
                <div className="headerSide header-left orange"></div>
                <div className="firstLine firstLine-left rotation1">
                  new york <br /> avenue
                </div>
              </div>
              <div className="squareSide">
                <div className="headerSide header-left orange"></div>
                <div className="firstLine firstLine-left rotation1">
                  tennessee <br /> avenue
                </div>
              </div>
              <div className="squareSide">
                <div className="firstLine firstLine-left no-color rotation1">
                  community
                  <br /> chest
                </div>
              </div>
              <div className="squareSide">
                <div className="headerSide header-left orange"></div>
                <div className="firstLine firstLine-left rotation1">
                  st.james <br />
                  place
                </div>
              </div>
              <div className="squareSide">
                <div className="firstLine firstLine-left no-color rotation1">
                  pennsylvania
                  <br /> railroad
                </div>
              </div>
              <div className="squareSide">
                <div className="headerSide header-left purple"></div>
                <div className="firstLine firstLine-left rotation1">
                  virginia
                  <br /> avenue
                </div>
              </div>
              <div className="squareSide">
                <div className="headerSide header-left purple"></div>
                <div className="firstLine firstLine-left rotation1">
                  states
                  <br /> avenue
                </div>
              </div>
              <div className="squareSide">
                <div className="firstLine firstLine-left no-color rotation1">
                  electric
                  <br />
                  company
                </div>
              </div>
              <div className="squareSide">
                <div className="headerSide header-left purple"></div>
                <div className="firstLine firstLine-left rotation1">
                  st. charles
                  <br />
                  place
                </div>
              </div>
            </div>
            <div className="square9"></div>
            <div className="square2">
              <div className="squareSide">
                <div className="headerSide header-right green"></div>
                <div className="firstLine firstLine-right rotation3">
                  pacific
                  <br /> avenue
                </div>
              </div>
              <div className="squareSide">
                <div className="headerSide header-right green"></div>
                <div className="firstLine firstLine-right rotation3">
                  north
                  <br />
                  carolina
                  <br />
                  avenue
                </div>
              </div>
              <div className="squareSide">
                <div className="firstLine firstLine-right no-color rotation3">
                  community
                  <br />
                  chest
                </div>
              </div>
              <div className="squareSide">
                <div className="headerSide header-right green"></div>
                <div className="firstLine firstLine-right rotation3">
                  pennsylvania
                  <br /> avenue
                </div>
              </div>
              <div className="squareSide">
                <div className="firstLine firstLine-right no-color rotation3">
                  short
                  <br /> line
                </div>
              </div>
              <div className="squareSide">
                <div className="firstLine firstLine-right no-color rotation3">
                  chance
                </div>
              </div>
              <div className="squareSide">
                <div className="headerSide header-right blue"></div>
                <div className="firstLine firstLine-right rotation3">
                  park
                  <br /> place
                </div>
              </div>
              <div className="squareSide">
                <div className="firstLine firstLine-right no-color rotation3">
                  luxury
                  <br /> tax
                </div>
              </div>
              <div className="squareSide">
                <div className="headerSide header-right blue"></div>
                <div className="firstLine firstLine-right rotation3">
                  tennessee
                  <br /> avenue
                </div>
              </div>
            </div>
          </div>

          <div className="row top">
            <div className="square2">
              <span className="corner4-left">just</span>
              <div className="squareCorner">
                <span className="corner corner4">
                  in <br />
                  jail
                </span>
              </div>
              <span className="corner4-bottom">visiting</span>
            </div>
            <div className="square1">
              <div className="header header-bottom lightblue"></div>
              <div className="firstLine firstLine-bottom">
                connecticut avenue
              </div>
            </div>
            <div className="square1">
              <div className="header header-bottom lightblue"></div>
              <div className="firstLine firstLine-bottom">
                vermont
                <br /> avenue
              </div>
            </div>
            <div className="square1">
              <div className="firstLine firstLine-bottom no-color">chance</div>
            </div>
            <div className="square1">
              <div className="header header-bottom lightblue"></div>
              <div className="firstLine firstLine-bottom">
                oriental
                <br /> avenue
              </div>
            </div>
            <div className="square1">
              <div className="firstLine firstLine-bottom no-color">
                reading
                <br /> railroad
              </div>
            </div>
            <div className="square1">
              <div className="firstLine firstLine-bottom no-color">
                income
                <br /> tax
              </div>
            </div>
            <div className="square1">
              <div className="header header-bottom brown"></div>
              <div className="firstLine firstLine-bottom">
                baltic
                <br /> avenue
              </div>
            </div>
            <div className="square1">
              <div className="firstLine firstLine-bottom no-color">
                community
                <br /> chest
              </div>
            </div>
            <div className="square1">
              <div className="header header-bottom brown"></div>
              <div className="firstLine firstLine-bottom">
                mediter-
                <br /> ranean <br /> avenue
              </div>
            </div>
            <div className="square2">
              <span className="corner corner3">
                collect
                <br />
                M200 salary
                <br />
                as you pass
              </span>
            </div>
          </div>
        </div>
      </div>
    </Board>
  );
}
