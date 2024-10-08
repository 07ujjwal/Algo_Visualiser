import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const SortInfo = ({ title, description, worstCase, avgCase, bestCase, space }) => (
  <div className="SortInfo">
    <hr />
    <h1>{title || 'Select Algorithm'}</h1>

    <div className="SortInfo__Body">
      <article className="SortInfo__Article">
        {description ? (
          description
        ) : (
          <p>
            You must select an algorithm before you can visualize its
            execution on an array of numbers.
          </p>
        )}
      </article>

      <aside className="SortInfo__Aside">
        <h3>Performance</h3>
        <table>
          <tbody>
            <tr>
              <td>Worst-case time complexity</td>
              <td>
                <code>{worstCase}</code>
              </td>
            </tr>
            <tr>
              <td>Average time complexity</td>
              <td>
                <code>{avgCase}</code>
              </td>
            </tr>
            <tr>
              <td>Best-case time complexity</td>
              <td>
                <code>{bestCase}</code>
              </td>
            </tr>
            <tr>
              <td>Worst-case space complexity</td>
              <td>
                <code>{space}</code>
              </td>
            </tr>
          </tbody>
        </table>
      </aside>
    </div>
  </div>
);

SortInfo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.node,
  worstCase: PropTypes.node,
  avgCase: PropTypes.node,
  bestCase: PropTypes.node,
  space: PropTypes.node,
};

export default SortInfo;
